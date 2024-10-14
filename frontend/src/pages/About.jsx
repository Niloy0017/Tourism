import React from 'react'

export const About = () => {
    return (
            <div className='container justify-content-center align-items d-flex flex-column m-3 gap-3'>

                <h1 className="text-center h1">About Us</h1>

                <img src='https://res.cloudinary.com/jnto/image/upload/w_1200,h_799,c_fill,f_auto,fl_lossy,q_60/v1/media/filer_public/25/30/2530fede-9453-496e-a116-962e9c9788ea/yasaka-pagoda-sannenzaka-dusk-shutterstock_lpgtvi'>
                </img>
                <p className='text-center h5'>FIG : Kyoto At Pre Dawn</p>

                <section className="d-flex flex-column ">
                    <div className='h3'>Who Are We:</div>

                    <div className='about-paragraph d-flex flex-column flex-md-row'>

                        <img src='https://png.pngtree.com/thumb_back/fh260/background/20210907/pngtree-tourist-attraction-landmark-image_795645.jpg'
                            className='col-12 col-md-6' />

                        <div className='col-12 col-md-6 d-flex flex-column gap-2 px-2'>
                            <p>স্বাগতম <strong>বনফুলে</strong>, your premier destination for extraordinary international travel experiences.</p>
                            <p>We specialize in crafting unforgettable journeys to some of the world's most enchanting destinations,
                                including Saint Petersburg, Nanjing, Venice, and Kyoto.</p>
                        </div>

                    </div>
                </section>

                <section className='about-paragraph d-flex flex-column flex-md-row'>
                    <div className='col-12 col-md-7 d-flex flex-column '>

                        <div className='h3'>What Sets Us Apart:</div>

                        <ul className='d-flex flex-column gap-2'>
                            <li><strong>Expertise:</strong> Our team of experienced travel specialists has deep knowledge of each destination, ensuring you receive personalized recommendations and insider tips.</li>
                            <li><strong>Tailored Experiences:</strong> We curate bespoke itineraries that cater to your preferences and interests, ensuring every moment of your journey is filled with wonder and discovery.</li>
                            <li><strong>Quality and Comfort:</strong> From luxury accommodations to seamless logistics, we prioritize your comfort and satisfaction throughout your entire trip.</li>
                        </ul>

                    </div>

                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb6_ggi-DYT-ehgfnQxU5yMW3OH0deK6gHCg&s'
                        className='col-12 col-md-5'></img>
                </section>

                <section className='about-paragraph d-flex flex-column flex-md-row'>

                    <img src='https://5.imimg.com/data5/UF/CK/GLADMIN-39362926/web-solutions-for-travel-and-tourism-industry-500x500.png'
                        className='col-12 col-md-6' />

                    <div className='col-12 col-md-6'>
                        <div className='h3'>Our Services Include:</div>
                        <ul>
                            <li><strong>Customized Itineraries:</strong> Tailored to fit your schedule and preferences.</li>
                            <li><strong>Accommodation and Transportation:</strong> Handpicked options to suit your style and budget.</li>
                            <li><strong>Guided Tours and Activities:</strong> Curated experiences to immerse you in the local culture and history.</li>
                        </ul>
                    </div>

                </section>

                <section className='col-12 p-2'>
                    <p className='about-info'>
                        Whether you are planning a romantic getaway, a family vacation, or a solo adventure, let <strong>বনফুল</strong> be your trusted
                        partner in creating memories that will last a lifetime.</p>
                    <p className='about-info'>Contact us today to start planning your next journey to Saint Petersburg, Nanjing, Venice, Kyoto, and beyond!</p>
                </section>

                <p className="about-moto text-center col-12 p-2">
                    বিশ্ব পর্যটনের সাথে আমাদের সফর শুরু হোক - <strong>বনফুল</strong>  - যেখানে প্রতিটি পথ শুরু হয়।
                </p>

                <footer className='col-12 p-2 text-center'>
                    <p className='about-info'><strong>Contact Information-</strong>bonoful151@gmail.com</p>
                </footer>

            </div >
    )
}

