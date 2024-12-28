import { useEffect, useRef } from 'react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import MenuBurger from '@/components/MenuBurger'

const MapPage = () => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const MAPTILER_KEY = import.meta.env.VITE_MAPTILER_KEY;

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await fetch('src/constant/departments.json')
        const data = await response.json()

        if (mapContainerRef.current) {
          const map = new maplibregl.Map({
            container: mapContainerRef.current,
            style: `https://api.maptiler.com/maps/basic/style.json?key=${MAPTILER_KEY}`,
            center: [1.9263836, 47.8438305],
            zoom: 1,
            maxZoom: 20,
            minZoom: 1,
            maxBounds: [
              [1.924, 47.8428],
              [1.928, 47.8448]
            ],
          })

          // Add markers with labels from the fetched data
          data.forEach((department: { id: number, name: string, coordinates: [number, number]}) => {
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
            new maplibregl.Marker()
              .setLngLat([department.coordinates[1], department.coordinates[0]])
              .setPopup(popup)
              .addTo(map)
          })

          return () => map.remove()
        }
      } catch (error) {
        console.error('Error fetching departments:', error)
      }
    }

    fetchDepartments()
  }, [MAPTILER_KEY])

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