import { useState, useEffect } from 'react'

function Homepage() {
    const [company, setCompany] = useState(null)

    useEffect(() => {
        const fetchComapny = async () => {
            const res = await fetch('https://api.spacexdata.com/v4/company')
            const data = await res.json()
            setCompany(data)
        }
        fetchComapny()
    }, [])

    return (
        <>
            <section className='showcase' id='Homepage'>
                <div className="overlay">
                    <article className='text-white ' >
                        {company && <><h2 data-text='All the SpaceX Capsule data in one place' className='heading text-center capitalize'>Welcome to SpaceX Capsule Page</h2>

                        </>
                        }

                    </article>
                </div>
            </section>
        </>
    )
}

export default Homepage