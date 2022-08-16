import React from 'react'
import ContactCard from '../components/ContactCard'
import Seo from '../components/seo'
import Layout from '../components/layout'
import Subscribe from '../components/Subscribe'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import { HiOutlineChevronRight } from 'react-icons/hi'
import Six from '../images/bg/6.svg'

const Hero = () => {
    return (
        <section className="max-h-[100vh] overflow-clip">
            <div className="px-4 md:py-32 py-16  max-w-7xl mx-auto">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-8">
                    <div className="w-full sm:order-last">
                        <img src={Six} className="w-full" height="500" alt="BiT Community" />
                    </div>
                    <div className="text-left max-w-xl">
                        <h4 className="mb-8 text-dark">We are a community of God’s battle axes, in (one of) the most influential spaces of our generation. We are on a mission to help Believers in tech thrive and make impact for the Gospel by providing a platform for new and old to get inspired by the stories and journey of others, learn and take action while at it.
                            Would you join us as we go into all the world with tech to preach the Gospel with excellence.</h4>
                        <div className="flex justify-start gap-2 sm:gap-6">
                            <Link to="/about-us" aria-label="Join the Community" >
                                <button aria-label="Join the Community" className="btn bg-black btn-lg text-white mx-auto lg:mx-0">
                                    <span>Join the Community</span> <HiOutlineChevronRight size="20" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const AboutUs = () => {
    return (
        <section className="py-16">
            <div className="px-4 max-w-7xl mx-auto">
                <div className="card bg-primary text-pastel relative flex">
                    <div className="card mask bg-five bg-cover opacity-10"></div>
                    <div className="text-left sm:text-center max-w-6xl mx-auto z-10">
                        <div className="text-6xl sm:text-7xl mb-4 font-semibold overflow-visible">
                            <span>“Go ye into all the world…”</span>
                        </div>
                        <h4 className="mb-8 sm:text-center font-normal">  We both know you may never reach all the ends of the Earth but you know what can? ...<span className='font-bold'>Tech</span></h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Mission = () => {
    return (
        <section className="py-16">
            <div className="px-4 max-w-7xl mx-auto">

                <div className='font-bold text-8xl mb-4'>Our Mission</div>
                <h3 className='leading-tight mb-16 text-2xl font-normal'>We exist to use whatever gift we have received to serve others, as faithful stewards of God’s grace in its various forms, transforming our world with excellence and propagating the Gospel with every project we embark on.</h3>

            </div>
        </section>
    )
}

const Visioners = () => {
    return (
        <section className="py-12">
            <div className="px-4 max-w-7xl mx-auto">
            <h2 className="text-dark font-bold font-sans mb-16 text-center">Meet the Visioners</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className='text-center'>
                        <StaticImage src="../images/vis/love-ad.jpg" className='rounded-full' height="250" />
                        <div className="mt-4">
                            <h4>Love Adeosun</h4>
                            <p>Project Coordinator</p>
                        </div>
                    </div>
                    <div className='text-center'>
                        <StaticImage src="../images/vis/shalom.jpg" className='rounded-full' height="250" />
                        <div className="mt-4">
                            <h4>Shalom Olomolaiye</h4>
                            <p>Back-end Developer</p>
                        </div>
                    </div>
                    <div className='text-center'>
                        <StaticImage src="../images/vis/love-ak.jpg" className='rounded-full' height="250" />
                        <div className="mt-4">
                            <h4>Love Akinlesi</h4>
                            <p>Front-end Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const AboutPage = () => (
    <Layout>
        <Seo title="About" />
        <Hero />
        <Mission />
        <Visioners />
        <AboutUs />
        <ContactCard />
        <Subscribe />
    </Layout>
)

export const Head = () => <Seo title="About" />

export default AboutPage