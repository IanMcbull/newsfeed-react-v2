import avatar from "./assets/avatar.png"
import logo from "./assets/logo.svg"
import articleImageOne from "./assets/article-image-one.png"
import articleImageTwo from "./assets/article-image-two.png"
import avatarImageOne from "./assets/avatar-feed-one.png"
import avatarImageTwo from "./assets/avatar-feed-two.png"
function App() {

  return (
    <main className="min-h-screen p-4 md:p-0 grid grid-cols-1 gap-6 md:grid-cols-[120px,auto]">
      {/* Navbar */}
      <nav className="flex flex-col">
        <div className="md:hidden flex justify-between items-center">
          <img src={logo} alt="logo main" className="w-32" />
          <i class="fa-solid fa-bars text-xl"></i>
        </div>
        <div className="hidden text-xl border-r-2 border-[#E6E6E6] md:flex md:flex-col items-center justify-center text-orange gap-10 min-h-full">
          <a href="#"><i class="fa-solid fa-house"></i></a>
          <a><i class="fa-regular fa-bell"></i></a>
          <a href="#"><i class="fa-sharp fa-regular fa-bookmark"></i></a>
          <a href="#"><i class="fa-solid fa-toggle-off"></i></a>
          <a href="#"><i class="fa-regular fa-pen-to-square mt-9"></i></a>
          <img src={avatar} className="mt-28 rounded-full h-8 w-8 object-cover" />
        </div>
      </nav>
      {/* NewsFeed */}
      <article className="flex">
        {/* Feed */}
        <section className="w-3/4">
        <header className="flex justify-between mt-20 border-b-2 border-[#E6E6E6] items-center pb-3">
         <div className="flex text-base gap-6 items-center">
           <a href="#" className="text-gray-text font-light">Following</a>
           <a href="#" className="text-black font-medium">Recommended</a>
         </div>
         <img src={logo} alt="logo"/>
        </header>
        <article className="flex flex-col max-w-6xl mx-auto mt-10 h-3/4 justify-around">
          <section className="flex card gap-8">
            <div className="flex flex-col gap-2">
              <div className="card-header flex gap-2">
               <img src={avatarImageOne}/>
               <p>Amit Das</p>
               <p>4 days ago</p>
              </div>
              <h2 className="card-title font-normal text-xl">
              Best practices for refactoring legacy code 
              </h2>
              <p className="card-content text-paragraph-text max-w-2xl">
              It is quite common for us developers, especially those newer to the field, to have an idea that when entering a new company, a new project, they will come across clean, well-organized, well-structured, and easy-to-navigate and maintain code (or maybe just me in my naivety haha).
              </p>
              <div className="card-footer flex justify-between mt-2">
                   <div className="flex gap-4">
                   <p className="px-4 rounded-full bg-gray-pills">Web dev</p>
                   <p>3 min read</p>
                   </div>
                   <div className="flex gap-2">
                   <i class="fa-regular fa-bookmark"></i>
                   <i class="fa-solid fa-ellipsis"></i>
                   </div>
              </div>
            </div>
            <img className="card-img" src={articleImageOne}/>
          </section>
          <section className="flex card gap-8">
            <div className="flex flex-col gap-2">
              <div className="card-header flex gap-2">
               <img src={avatarImageTwo}/>
               <p>Amit Das</p>
               <p>4 days ago</p>
              </div>
              <h2 className="card-title font-normal text-xl">
              Melody mobile app: a UI UX case study 
              </h2>
              <p className="card-content text-paragraph-text max-w-2xl">
              An intense way to learn about the process and practice your designs skills — My 1st hackathon Hackathons have been on my mind since I heard it was a good way to gain experience as a junior UX designer. As my portfolio...
              </p>
              <div className="card-footer flex justify-between mt-2">
                   <div className="flex gap-4">
                   <p className="px-4 rounded-full bg-gray-pills">Web dev</p>
                   <p>3 min read</p>
                   </div>
                   <div className="flex gap-2">
                   <i class="fa-regular fa-bookmark"></i>
                   <i class="fa-solid fa-ellipsis"></i>
                   </div>
              </div>
            </div>
            <img className="card-img" src={articleImageTwo}/>
          </section>
        </article>
        </section>
        {/* Recommendations */}
      </article>
    </main>
  )
}

export default App
