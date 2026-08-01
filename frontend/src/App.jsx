import Upload from "./Upload";
import "./App.css";
import { useState } from "react";


function App() {


  const [history, setHistory] = useState(

    JSON.parse(localStorage.getItem("history")) || []

  );
const dashboard = {
  plastic: history.filter(item => item.result === "Plastic").length,
  paper: history.filter(item => item.result === "Paper").length,
  organic: history.filter(item => item.result === "Organic").length,
  metal: history.filter(item => item.result === "Metal").length,
  glass: history.filter(item => item.result === "Glass").length,
};


  return (


    <div className="app">



      {/* Navbar */}

      <nav className="navbar">


        <div className="logo">

          ♻️ AI Garbage Detection

        </div>



        <div className="navLinks">


          <span onClick={() =>
            document.getElementById("home")
            .scrollIntoView()
          }>

            Home

          </span>



          <span onClick={() =>
            document.getElementById("about")
            .scrollIntoView()
          }>

            About

          </span>




          <span onClick={() =>
            document.getElementById("features")
            .scrollIntoView()
          }>

            Features

          </span>



        </div>



      </nav>







      {/* Hero */}


      <section className="hero" id="home">


        <div className="heroText">


          <span className="badge">

            🤖 AI Powered Waste Solution

          </span>




          <h1>

            Smart Garbage Detection

            <br/>

            Using Artificial Intelligence

          </h1>




          <p>

            Transform waste management with AI.
            Upload garbage images and instantly
            detect waste categories for a cleaner future.

          </p>




          <button

            className="heroBtn"

            onClick={() =>
              document.querySelector(".uploadSection")
              .scrollIntoView()
            }

          >

            Start Detection 🚀

          </button>



        </div>






        <div className="heroCard">


          <div className="aiCircle">

            🤖

          </div>


          <h3>

            AI Waste Analyzer

          </h3>


          <p>

            Detect • Classify • Recycle

          </p>



        </div>



      </section>








      {/* Upload */}



      <section className="uploadSection">


        <Upload setHistory={setHistory}/>


      </section>









      {/* Stats */}


      <section className="stats">
        

</section>
{/* Dashboard */}

<section className="dashboard">

  <h2>📊 AI Dashboard</h2>

  <div className="dashboardGrid">

    <div className="dashCard">
      <h3>📷</h3>
      <h1>{history.length}</h1>
      <p>Total Images</p>
    </div>

    <div className="dashCard">
      <h3>♻️</h3>
      <h1>{dashboard.plastic}</h1>
      <p>Plastic</p>
    </div>

    <div className="dashCard">
      <h3>📄</h3>
      <h1>{dashboard.paper}</h1>
      <p>Paper</p>
    </div>

    <div className="dashCard">
      <h3>🌱</h3>
      <h1>{dashboard.organic}</h1>
      <p>Organic</p>
    </div>

    <div className="dashCard">
      <h3>🔩</h3>
      <h1>{dashboard.metal}</h1>
      <p>Metal</p>
    </div>

    <div className="dashCard">
      <h3>🍾</h3>
      <h1>{dashboard.glass}</h1>
      <p>Glass</p>
    </div>

  </div>

        <div>


          <h2>

            {history.length}+

          </h2>


          <p>

            Images Analyzed

          </p>


        </div>




        <div>


          <h2>

            5+

          </h2>


          <p>

            Waste Categories

          </p>


        </div>




        <div>


          <h2>

            AI

          </h2>


          <p>

            Smart Detection

          </p>


        </div>



      </section>









      {/* Features */}



      <section className="features" id="features">



        <div className="featureCard">


          <div className="icon">

            🤖

          </div>


          <h3>

            AI Detection

          </h3>


          <p>

            Automatically identify waste categories
            using artificial intelligence.

          </p>


        </div>







        <div className="featureCard">


          <div className="icon">

            ♻️

          </div>


          <h3>

            Waste Classification

          </h3>


          <p>

            Classify Plastic, Paper, Metal,
            Glass and Organic waste.

          </p>


        </div>







        <div className="featureCard">


          <div className="icon">

            🌱

          </div>


          <h3>

            Eco Friendly

          </h3>


          <p>

            Supports recycling and smart
            waste management.

          </p>


        </div>



      </section>









      {/* History */}



      <section className="history">



        <div className="historyHeader">


          <h2>

            📜 Detection History

          </h2>




          {

          history.length > 0 &&


          <button

            className="clearBtn"


            onClick={()=>{


              localStorage.removeItem("history");


              setHistory([]);


            }}

          >

            Clear All

          </button>


          }


        </div>







        {


        history.length === 0 ?


        (

          <p className="empty">

            No detection history yet 🚀

          </p>


        )


        :


        (


        <div className="historyGrid">



        {


        history.map((item,index)=>(


          <div className="historyCard" key={index}>


            <img

              src={item.image}

              alt="history"

            />



            <h3>

              🗑️ {item.result}

            </h3>



            <p>

              {item.date}

            </p>




            <button

              className="deleteBtn"


              onClick={()=>{


                const updated = history.filter(

                  (_,i)=>i!==index

                );



                localStorage.setItem(

                  "history",

                  JSON.stringify(updated)

                );



                setHistory(updated);



              }}


            >

              Delete

            </button>



          </div>



        ))



        }



        </div>


        )


        }



      </section>









      {/* About */}



      <section className="about" id="about">


        <h2>

          About AI Garbage Detection

        </h2>



        <p>

          This project uses Artificial Intelligence
          to analyze garbage images and support
          smart waste management and recycling.

        </p>


      </section>









      {/* Footer */}



    <footer>

  <div className="footerContainer">

    <div className="footerLogo">

      <h2>♻️ AI Garbage Detection</h2>

      <p>
        AI-powered smart waste detection platform designed to
        promote recycling and a cleaner environment.
      </p>

    </div>

    <div className="footerLinks">

      <h3>Quick Links</h3>

      <p>Home</p>
      <p>Features</p>
      <p>About</p>

    </div>

    <div className="footerLinks">

      <h3>Technology</h3>

      <p>Artificial Intelligence</p>
      <p>Image Classification</p>
      <p>Smart Recycling</p>

    </div>

  </div>

  <div className="footerBottom">

    © 2026 AI Garbage Detection • Developed for Smart Waste Management

  </div>

</footer>





    </div>


  );

}



export default App;
