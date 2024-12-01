import AddReviewForm from '@/src/forms/add-review-form';
import React, {useState} from 'react';
import UserReview from './review';

const ShopDetailsArea = () => {

   const [product, setProduct] = useState(1)
    const plus = () => {
        setProduct(prev => prev + 1)
    }
    const minus = () => {
        if (product >= 1) {
          setProduct((prev) => prev - 1);
      }
    };


    
    return (
        <>
        <div className="shop-details-area pt-120 pb-120">
        <div className="container">
        <div className="row">
            <div className="col-xxl-6 col-xl-6 col-lg-5 col-12">
                <div className="product-img-tabs">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button  className="nav-links active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home"
                            type="button" role="tab" aria-controls="home" aria-selected="true">
                                <img src="/assets/img/shop/product-tab.jpg" alt="" />
                        </button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-links" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile"
                            type="button" role="tab" aria-controls="profile" aria-selected="false"><img
                                src="/assets/img/shop/product-tab-2.jpg" alt="" /></button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-links" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact"
                            type="button" role="tab" aria-controls="contact" aria-selected="false"><img
                                src="/assets/img/shop/product-tab-3.jpg" alt="" /></button>
                    </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active w-img" id="home" role="tabpanel"
                        aria-labelledby="home-tab"><img src="/assets/img/shop/product-tab-lg.jpg" alt="" /></div>
                    <div className="tab-pane fade w-img" id="profile" role="tabpanel" aria-labelledby="profile-tab"><img
                            src="/assets/img/shop/product-tab-lg-2.jpg" alt="" /></div>
                    <div className="tab-pane fade w-img" id="contact" role="tabpanel" aria-labelledby="contact-tab"><img
                            src="/assets/img/shop/product-tab-lg-3.jpg" alt="" /></div>
                    </div>
                </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-7 col-12">
                <div className="product-details-content">
                    <div className="product-top mb-10">
                    <div className="product-tag">
                        <a href="#">Electronics</a>
                    </div>
                    <div className="product-rating mr-5">
                        <a href="#"><i className="fas fa-star"></i></a>
                        <a href="#"><i className="fas fa-star"></i></a>
                        <a href="#"><i className="fas fa-star-half-alt"></i></a>
                    </div>
                    <div className="product-reviews">
                        <a href="#">10 reviews</a>
                    </div>
                    </div>
                    <h3 className="product-details-title mb-20">Wide Cotton Tunic extreme hammer</h3>
                    <div className="product-price mb-30">
                    <span className="old-price pr-10">$90.35 </span>
                    <span className="new-price">$70.25</span>
                    </div>
                    <div className="product-paragraph">
                    <p className="mb-25">Priyoshop has brought to you the Hijab 3 Pieces Combo Pack PS23. It is a
                        completely modern design and you feel comfortable to put on this hijab. <br />
                        Buy it at the best price.
                    </p>
                    </div>
                    <div className="product-quantity-wapper mb-40">
                    <form  onSubmit={(e) =>  e.preventDefault()}>
                        <div className="d-flex align-items-center">
                            <div className="product-quantity mt-10 mb-10">
                                <span className="cart-minus" onClick={minus}><i className="fal fa-minus"></i></span>
                                <input className="cart-input" type="text" value={product} />
                                <span className="cart-plus" onClick={plus} ><i className="fal fa-plus"></i></span>
                            </div>
                            <div className="product-extra-btn">
                                <button type="submit" className="tp-btn product-quantity-button f-left mr-20">
                                <i className="fal fa-shopping-basket"> </i>
                                {" "} Add To Cart</button>
                                <a className="heart-icon f-left" href="#"><i className="fal fa-heart"></i></a>
                            </div>
                        </div>
                    </form>
                    </div>
                </div>
                <div className="product-details-meta">
                    <div className="sku mb-5">
                    <span>SKU:</span>
                    <a href="#">BO1D0MX8SJ</a>
                    </div>
                    <div className="categories mb-5">
                    <span>Categories:</span> <a href="#">T-Shirts,</a> <a href="#">Tops,</a> <a href="#">Womens</a>
                    </div>
                    <div className="tag mb-25">
                    <span>Tags:</span> <a href="#"> fashion,</a> <a href="#">t-shirts,</a> <a href="#"> women</a>
                    </div>
                </div>
                <div className="product-details-share">
                    <span>Share:</span>
                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                    <a href="#"><i className="fab fa-twitter"></i></a>
                    <a href="#"><i className="fab fa-behance"></i></a>
                    <a href="#"><i className="fab fa-youtube"></i></a>
                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
            </div>
        </div>
        </div>
        </div>

        <div className="product-additional-info pb-110">
         <div className="container">
            <div className="row">

               <div className="col-xl-12">
                  <div className="product-additional-tab">
                     <ul className="nav nav-tabs" id="myTabs" role="tablist">
                        <li className="nav-item" role="presentation">
                           <button className="nav-links active" id="home-tab-1" data-bs-toggle="tab"
                              data-bs-target="#home-1" type="button" role="tab" aria-controls="home"
                              aria-selected="true">Description</button>
                        </li>
                        <li className="nav-item" role="presentation">
                           <button className="nav-links" id="Additional-Information-tab" data-bs-toggle="tab"
                              data-bs-target="#Additional-Information" type="button" role="tab" aria-controls="profile"
                              aria-selected="false">Additional Information</button>
                        </li>
                        <li className="nav-item" role="presentation">
                           <button className="nav-links" id="Reviews-tab" data-bs-toggle="tab" data-bs-target="#Reviews"
                              type="button" role="tab" aria-controls="contact" aria-selected="false">Reviews
                              (3)</button>
                        </li>
                        <li className="nav-item" role="presentation">
                           <button className="nav-links" id="Size-Chart-tab" data-bs-toggle="tab" data-bs-target="#Chart"
                              type="button" role="tab" aria-controls="contact" aria-selected="false">Size Chart</button>
                        </li>
                     </ul>
                     <div className="tab-content tp-content-tab" id="myTabContent-2">


                        <div className="tab-pane fade show active" id="home-1" role="tabpanel" aria-labelledby="home-tab-1">
                           <p>In marketing a product is an object or system made available for consumer use it is
                              anything
                              that can be offered to a market to
                              the desire or need of a \retailing, products are often referred to as merchandise, and in
                              manufacturing, products are bought as
                              materials and then sold as finished goods. A service regarded to as a type of product.
                              Commodities are usually raw materials
                              metals and agricultural products, but a commodity can also be anything wide the open
                              market.
                              In project management,
                              the formal definition of the project deliverables</p>
                           <p>A product can be classified as tangible or intangible. A tangible product is a physical
                              object that can be perceived by touch
                              building, vehicle, gadget, An intangible product is a product that can only be perceived
                              indirectly such as an insurance policy.
                              can be broadly classified under intangible be durable or non durable. A product line is "a
                              group of products that are closely
                              either because they function in a similar manner, are sold to the same customergroups.</p>
                        </div>

                        <div className="tab-pane fade" id="Additional-Information" role="tabpanel"
                           aria-labelledby="Additional-Information-tab">
                           <div className="product__details-info table-responsive">
                              <table className="table table-striped">
                                 <tbody>
                                    <tr>
                                       <td className="add-info">Weight</td>
                                       <td className="add-info-list"> 2 lbs</td>
                                    </tr>
                                    <tr>
                                       <td className="add-info">Dimensions</td>
                                       <td className="add-info-list"> 12 × 16 × 19 in</td>
                                    </tr>
                                    <tr>
                                       <td className="add-info">Product</td>
                                       <td className="add-info-list"> Purchase this product on rag-bone.com</td>
                                    </tr>
                                    <tr>
                                       <td className="add-info">Color</td>
                                       <td className="add-info-list"> Gray, Black</td>
                                    </tr>
                                    <tr>
                                       <td className="add-info">Size</td>
                                       <td className="add-info-list"> S, M, L, XL</td>
                                    </tr>
                                    <tr>
                                       <td className="add-info">Model</td>
                                       <td className="add-info-list"> Model </td>
                                    </tr>
                                    <tr>
                                       <td className="add-info">Shipping</td>
                                       <td className="add-info-list"> Standard shipping: $5,95L</td>
                                    </tr>
                                    <tr>
                                       <td className="add-info">Care Info</td>
                                       <td className="add-info-list"> Machine Wash up to 40ºC/86ºF Gentle Cycle</td>
                                    </tr>
                                    <tr>
                                       <td className="add-info">Brand</td>
                                       <td className="add-info-list"> Kazen</td>
                                    </tr>
                                 </tbody>
                              </table>
                           </div>
                        </div>


                        <div className="tab-pane fade" id="Reviews" role="tabpanel" aria-labelledby="Reviews-tab">
                           <div className="product-details-review">
                              <h3 className="comments-title mb-35">3 reviews for “Wide Cotton Tunic extreme hammer”</h3>
                              <div className="latest-comments">
                                 <ul>
                                    <UserReview />
                                 </ul>
                              </div>
                              <div className="product-details-comment pb-100">
                                 <div className="comment-title mb-20">
                                    <h3>Add a review</h3>
                                    <p>Your email address will not be published. Required fields are marked*</p>
                                 </div>
                                 <div className="comment-rating mb-20 d-flex">
                                    <span>Overall ratings</span>
                                    <ul>
                                       <li><a href="#"><i className="fas fa-star"></i></a></li>
                                       <li><a href="#"><i className="fas fa-star"></i></a></li>
                                       <li><a href="#"><i className="fas fa-star"></i></a></li>
                                       <li><a href="#"><i className="fas fa-star"></i></a></li>
                                       <li><a href="#"><i className="fal fa-star"></i></a></li>
                                    </ul>
                                 </div>
                                 <div className="comment-input-box">
                                    <AddReviewForm />
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div className="tab-pane fade" id="Chart" role="tabpanel" aria-labelledby="Size-Chart-tab">
                           <div className="product-size-wrapper fix">
                              <div className="product-details-size-table table-responsive">
                                 <table className="table text-center">
                                    <thead>
                                       <tr>
                                          <th>Size (US)</th>
                                          <th>Chest</th>
                                          <th>Neck</th>
                                          <th>Waist</th>
                                          <th>Arm Length</th>
                                       </tr>
                                    </thead>
                                    <tbody>
                                       <tr>
                                          <td>X</td>
                                          <td>32-34</td>
                                          <td>13-13.5 </td>
                                          <td>26-28</td>
                                          <td>31-32</td>
                                       </tr>
                                       <tr>
                                          <td>S</td>
                                          <td>35-37</td>
                                          <td>14-14.5</td>
                                          <td>29-31</td>
                                          <td>32-33</td>
                                       </tr>
                                       <tr>
                                          <td>M</td>
                                          <td>38-40</td>
                                          <td>15-15.5</td>
                                          <td>32-34</td>
                                          <td>33-34</td>
                                       </tr>
                                       <tr>
                                          <td>L</td>
                                          <td>41-43</td>
                                          <td>16-16.5</td>
                                          <td>35-37</td>
                                          <td>34-35</td>
                                       </tr>
                                       <tr>
                                          <td>XL</td>
                                          <td>44-46</td>
                                          <td>17-17.5</td>
                                          <td>38-40</td>
                                          <td>35-36</td>
                                       </tr>
                                       <tr>
                                          <td>XXL</td>
                                          <td>47-49</td>
                                          <td> 18-18.5</td>
                                          <td>41-43</td>
                                          <td>36-37</td>
                                       </tr>
                                       <tr>
                                          <td>XXXL</td>
                                          <td>50-52</td>
                                          <td>18-18.5</td>
                                          <td>44-45</td>
                                          <td>36-37</td>
                                       </tr>
                                    </tbody>
                                 </table>
                              </div>
                           </div>
                        </div>

                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
        </>
    );
};

export default ShopDetailsArea;