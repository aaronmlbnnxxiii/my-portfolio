import React from 'react'
import { Button } from '@ui/button/Button'
import { RiInformationFill, RiDiscussFill, RiCodeSSlashLine } from 'react-icons/Ri'
import { useStaticQuery } from 'gatsby'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { getImage } from 'gatsby-plugin-image'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'gatsby'

const Specializations = [
    {
        title: "More Info",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing eli",
        icon: <RiInformationFill size="2rem" />
    },
    {
        title: "Lets talk",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit asd",
        icon: <RiDiscussFill size="2rem" />
    },
    {
        title: "Web Development",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        icon: <RiCodeSSlashLine size="2rem" />
    },
]


const HeroBanner = () => {
    const data = useStaticQuery(graphql`
        query {
            prismicHome {
    data {
      banner_title {
        text
      }
      banner_widgets {
        widget_description {
          text
        }
        widget_icon {
          gatsbyImageData
        }
        widget_title {
          text
        }
      }
    }
  }
        }
    `)

    console.log(data)

    return (
        <section id="home" className='min-h-screen w-full'>
            <div className='block max-w-[1024px] w-full mx-auto h-full mt-[55px]'>
                <h1 className='px-2 lg:px-0 text-[3rem] w-auto md:text-[5.5rem] text-center font-bold leading-none tracking-tight'>
                    {data.prismicHome.data.banner_title.text}
                </h1>

                <div className='grid grid-cols-1 md:grid-cols-3 px-4 gap-x-6 gap-y-4 mt-[50px] justify-center'>
                    {data.prismicHome.data.banner_widgets.map((val: any, i: number) => {
                        return (
                            <Link to="/" className='flex float-none bg-orange-100/75 md:bg-transparent px-2 items-center rounded-md cursor-pointer' key={val.widget_title + i}>
                                <span className='p-3 bg-orange-100/75  rounded-full h-max mr-2 [&>*]:text-orange-400'>
                                    <GatsbyImage alt="test" className="w-8 h-8" image={getImage(val.widget_icon.gatsbyImageData)} />
                                </span>
                                <div className='float-right max-w-[25ch]'>
                                    <strong className='text-orange-400'>{val.widget_title.text}</strong>
                                    <p className='hidden md:block leading-none text-sm tracking-wide'>{val.widget_description.text}</p>
                                </div>
                                <MdOutlineKeyboardArrowRight className='w-8 h-8 ml-auto block md:hidden text-orange-400' />
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default HeroBanner