import React from 'react'
import Login_page from './Login_page'

// import PreNavbar from './component/PreNavbar'
// import Navbar from './component/Navbar.js'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Slider from './component/Slider.js'
// import data from './data/data.json'
// import Offers from './component/Offers.js'
// import Headings from './component/Headings.js'
// import StarProduct from './component/StarProduct.js'
// import HotAccessoriesMenu from './component/HotAccessoriesMenu.js'
// import HotAccessories from './component/HotAccessories.js'
// import ProductReviews from './component/ProductReviews.js'


export default function App() {
  return (
    <div>
      {/* <Router>
        <PreNavbar />
        <Navbar />
        <Slider start={data.banner.start} />
        <Offers offer={data.offer} />
        <Headings text="STAR PRODUCTS" />
        <StarProduct starproduct={data.starProduct} />
        <Headings text="HOT ACCESSORIES" />
        <HotAccessoriesMenu />

 <Routes>

        <Route exact path="/music" element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} />

          <Route exact path="/smartDevice" element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />} />

          <Route exact path="/home" element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />} />
        </Routes>
<Headings text="PRODUCT REVIEWS" />
 <ProductReviews productReviews={data.productReviews} />
</Router> */}

        <Login_page/>
       

      
    </div>



  )
}
