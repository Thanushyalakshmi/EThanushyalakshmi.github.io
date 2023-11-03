import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>An e-commerce website is one that allows people to buy and sell physical goods, services, and digital products over the internet rather than at a brick-and-mortar location. Through an e-commerce website, a business can process orders, accept payments, manage shipping and logistics, and provide customer service.</p>
            <p>Offers several monthly plans for merchant stores. Buy.com, which is now part of the global Rakuten.com, is an expansive online marketplace that receives heavy traffic. eBay owns PayPal payment services and the Magento on-premise ecommerce platform solution.</p>
        </div>
    </div>
  )
}

export default DescriptionBox