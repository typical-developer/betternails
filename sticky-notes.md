# Navbar content
- logo (nails by betty word mark)
- About
- Services
- Gallery
- Testiomials
- Contact
- FAQ

# Pages (1)
- Home 

# Sections (Home Page)
- Hero
- About
- Services
- Gallery
- Testiomials
- Contact
- FAQ

# Things to source 
- cursive font for 'Nails by Betty'
- base font 


                <div className="absolute flex-between">
                    {/* about image */}
                    <img src="./img/about.jpg" alt="about nails by betty" className="w-[350px] h-[350px] rounded-full"  />

                    {/* about paragraphs */}
                    <div className="lg:max-w-lg space-y-4">
                        {aboutParagraphs.map(({id,content},delay) => 
                            <p data-aos="fade-left" data-aos-delay={delay * 50} key={id} >{content}</p>
                        )}
                    </div>
                </div>
