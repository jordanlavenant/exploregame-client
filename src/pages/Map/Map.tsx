import { useEffect, useRef, useState } from 'react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import MenuBurger from '@/components/MenuBurger'
import { gql, useQuery } from '@apollo/client'
import { useGeolocation } from "@uidotdev/usehooks"
import { LucideMessageSquareWarning } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

export const DEPARTMENTS = gql`
  query FindDepartments {
    departments {
      id
      name
      latitude
      longitude
      ColorSet {
        primary
      }
    }
  }
`

const MapPage = () => {
  const navigate = useNavigate()
  const mapContainerRef = useRef<HTMLDivElement | null>(null)
  const markersRef = useRef<maplibregl.Marker[]>([])
  const MAPTILER_KEY = import.meta.env.VITE_MAPTILER_KEY
  const [isOnline, setIsOnline] = useState(navigator.onLine)

  const distance = 0.002

  const { loading, error, data } = useQuery(DEPARTMENTS)

  const state = useGeolocation()

  useEffect(() => {
    const handleOnline = () => setIsOnline(true)
    const handleOffline = () => setIsOnline(false)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  useEffect(() => {
    if (!isOnline) return
    if (loading || error || !data) return

    if (mapContainerRef.current) {
      const map = new maplibregl.Map({
        container: mapContainerRef.current,
        style: `https://api.maptiler.com/maps/basic/style.json?key=${MAPTILER_KEY}`,
        center: [1.9268501, 47.8439263],
        zoom: 16.5,
        maxZoom: 20,
        minZoom: 1,
        maxBounds: [
          [1.9268501 - distance, 47.8439263 - distance],
          [1.9268501 + distance, 47.8439263 + distance]
        ],
      })

      // Add markers with labels from the fetched data
      data.departments.forEach((department: { id: number, name: string, latitude: number, longitude: number, ColorSet: { primary: string } }) => {
        const popup = new maplibregl.Popup({ offset: 25 })
          .setText(department.name)
          .on('open', () => {
            const popupElement = document.querySelector('.maplibregl-popup-content')
            if (popupElement) {
              popupElement.addEventListener('click', () => {
                window.location.href = "/departments/" + department.id
              })
            }
          })

        const marker = new maplibregl.Marker(
          {
            color: department.ColorSet.primary,
            scale: 1.5,
          }
        )
          .setLngLat([department.longitude, department.latitude])
          .setPopup(popup)
          .addTo(map)
      
        markersRef.current.push(marker)
      })

      if (!state.loading && state.latitude && state.longitude) {
        const marker = new maplibregl.Marker(
          {
            color: '#000000',
            scale: 1.5,
          }
        )
          .setLngLat([state.longitude, state.latitude])
          .addTo(map)

        markersRef.current.push(marker)
      }

      return () => {
        markersRef.current.forEach(marker => marker.remove())
        map.remove()
      }
    }
  }, [isOnline, loading, error, data, MAPTILER_KEY, state.loading])

  if (!isOnline) return (
    <section className='bg-red-500'>
      <div className='fixed flex justify-between items-center z-10 px-5 py-5 w-full border-t-8 border-[#822369]'>
        <p className='text-3xl font-bold uppercase text-[#822369]'>
          carte
        </p>
        <MenuBurger />
      </div>
      <div className='grid grid-rows-2 justify-center absolute top-1/2 -translate-y-10 w-full'>
        <div className='flex items-center gap-x-2'>
          <LucideMessageSquareWarning />
          <p className='text-muted-foreground'>Vous n'êtes pas connecté à internet</p>
        </div>
        <Button 
          className='h-14'
          variant="default"
          onClick={() => navigate('/')}
        >
          Retour
        </Button>      
      </div>
    </section>
  )
  if (loading) return (
    <section className='bg-red-500'>
    <div className='fixed flex justify-between items-center z-10 px-5 py-5 w-full border-t-8 border-[#822369]'>
      <p className='text-3xl font-bold uppercase text-[#822369]'>
        carte
      </p>
      <MenuBurger />
    </div>
    <div className='grid grid-rows-2 justify-center absolute top-1/2 -translate-y-10 w-full'>
      <div className='flex items-center gap-x-2'>
        <LucideMessageSquareWarning className='text-muted-foreground' />
        <p className='text-muted-foreground'>Chargement de la carte...</p>
      </div>
      <Button 
        className='h-14'
        variant="default"
        onClick={() => navigate('/')}
      >
        Retour
      </Button>
    </div>
  </section>
  )
  if (error) return (
    <section className='bg-red-500'>
      <div className='fixed flex justify-between items-center z-10 px-5 py-5 w-full border-t-8 border-[#822369]'>
        <p className='text-3xl font-bold uppercase text-[#822369]'>
          carte
        </p>
        <MenuBurger />
      </div>
      <div className='grid grid-rows-2 justify-center absolute top-1/2 -translate-y-10 w-full'>
        <div className='flex items-center gap-x-2'>
          <LucideMessageSquareWarning className='text-muted-foreground' />
          <p className='text-muted-foreground'>Une erreur s'est produite</p>
        </div>
        <Button 
          className='h-14'
          variant="default"
          onClick={() => navigate('/')}
        >
          Retour
        </Button>
      </div>
    </section>
  )

  return (
    <section>
      <div className='fixed flex justify-between items-center z-10 px-5 py-5 w-full border-t-8 border-[#822369]'>
        <p className='text-3xl font-bold uppercase text-[#822369]'>
          carte
        </p>
        <MenuBurger />
      </div>
      <div ref={mapContainerRef} className='h-screen'>
        {MAPTILER_KEY ? null : <p className='text-3xl font-bold text-red-500'>Please provide a MapTiler API key in the .env file</p>}
      </div>
    </section>
  )
}

export default MapPage;