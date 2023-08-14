import { useEffect, useState, useMemo } from 'react'

const contentful = require("contentful");

const client = contentful.createClient({
  space: "vb6y8nch6hx8", // space ID
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN
});

export const useContentful = () => {
  const [boats, setBoats] = useState()
  const [sliderImages, setSliderImages] = useState([])
  const [selectedBrand, setSelectedBrand] = useState("bermuda")
  const [selectedModelName, setSelectedModelName] = useState("Safari 550")
  const [selectedModelNumberOfImages, setSelectedModelNumberOfImages] = useState(5)
  const [numberOfLoadedImages, setNumberOfLoadedImages] = useState(0);

  useEffect(() => {
    getBoats().then((boats) => {
      setBoats(boats)
    })
    getSliderImages().then((images) => {
      setSliderImages(images)
    })
  }, [])
  useEffect(() => {
    if (!boats) return
    const model = boats.find(boat => boat.fields.marca.toLowerCase() === selectedBrand.toLowerCase() && boat.fields.posicion === 1)
    if (!model) {
      setSelectedModelName("")
      return;
    }
    setSelectedModelName(model.fields.modelo)
  }, [selectedBrand])

  
  const selectedModel = useMemo(() => {
    if (!boats) return
    const selectedBoat = boats.find(boat => boat.fields.modelo === selectedModelName)
    const numberOfImages = selectedBoat.fields.galeria.length + (selectedBoat.fields.foto1 ? 1 : 0) + (selectedBoat.fields.foto2 ? 1 : 0);
    setSelectedModelNumberOfImages(numberOfImages)
    setNumberOfLoadedImages(0)
    return selectedBoat;
  }, [selectedModelName, boats])
  const desktopSliderImagesUrls = useMemo(() => {
    if (!sliderImages) return
    const dekstopImagesUrls = sliderImages.filter(item => !item.fields.isMobile).map(item => item.fields.image.fields.file.url)
    return dekstopImagesUrls;
  }, [sliderImages])


  const getBoats = async () => {
    try {
      const boats = await client.getEntries({
        content_type: "lancha",
        select: "fields"
      }).then((response) => {
        const items = response.items.map((item) => {
          return item
        })
        return items
      })
      return boats
    } catch (error) {
      console.log(error)
    }
  }
  const getSliderImages = async () => {
    try {
      const images = await client.getEntries({
        content_type: "fotoSliderPrincipal",
        select: "fields"
      }).then((response) => {
        const items = response.items.map((item) => {
          return item
        })
        return items
      })
      return images
    } catch (error) {
      console.log(error)
    }
  }
  
  return {
    desktopSliderImagesUrls,
    boatsData: {
      boats,
      selectedModel,
      selectedBrand,
      selectedModelName,
      selectedModelNumberOfImages,
      numberOfLoadedImages
    },
    actions: {
      setSelectedBrand,
      setSelectedModelName,
      setNumberOfLoadedImages
    }
  }
}