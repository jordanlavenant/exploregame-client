import { useEffect, useRef } from 'react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import MenuBurger from '@/components/MenuBurger'
import { gql, useQuery } from '@apollo/client'

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
  const mapContainerRef = useRef<HTMLDivElement | null>(null)
  const markersRef = useRef<maplibregl.Marker[]>([])
  const MAPTILER_KEY = import.meta.env.VITE_MAPTILER_KEY

  const distance = 0.002

  const { loading, error, data } = useQuery(DEPARTMENTS)

  useEffect(() => {
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

      return () => {
        markersRef.current.forEach(marker => marker.remove())
        map.remove()
      }
    }
  }, [loading, error, data, MAPTILER_KEY])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <section>
      <div className='fixed flex justify-between items-center z-10 px-5 py-5 w-full border-t-8 border-[#822369]'>
        <p className='text-3xl font-bold uppercase text-[#822369]'>
          carte
        </p>
        <MenuBurger />
      </div>
      <div ref={mapContainerRef} className='h-screen'>
        Chargement de la carte
      </div>
    </section>
  )
}

export default MapPage;