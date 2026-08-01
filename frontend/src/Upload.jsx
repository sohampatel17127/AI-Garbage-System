import { useState } from "react";
import "./Upload.css";


function Upload({ setHistory }) {


  const [image, setImage] = useState(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);



  const handleImage = async (event) => {


    const file = event.target.files[0];


    if (!file) return;



    const imageURL = URL.createObjectURL(file);


    setImage(imageURL);

    setResult("");

    setLoading(true);




    const reader = new FileReader();



    reader.onloadend = async () => {



      const base64Image = reader.result.split(",")[1];



      try {



        const response = await fetch(

          "http://localhost:5000/analyze",

          {

            method:"POST",

            headers:{

              "Content-Type":"application/json",

            },


            body:JSON.stringify({

              image:base64Image,

              mimeType:file.type,

            }),


          }

        );




        const data = await response.json();



        setResult(data.prediction);




        // Save History

        const newHistory = {


          image:imageURL,


          result:data.prediction,


          date:new Date().toLocaleString()


        };




        const oldHistory =

          JSON.parse(localStorage.getItem("history")) || [];



        const updatedHistory = [

          newHistory,

          ...oldHistory

        ];




        localStorage.setItem(

          "history",

          JSON.stringify(updatedHistory)

        );



        setHistory(updatedHistory);




      }




      catch(error){


        setResult("Connection Failed");


      }



      setLoading(false);



    };




    reader.readAsDataURL(file);



  };






  return (



    <div className="uploadBox">



      <div className="uploadIcon">

        🤖

      </div>



      <h2>

        AI Waste Analyzer

      </h2>




      <p>

        Upload garbage image and let AI
        identify waste category instantly.

      </p>





      <label className="uploadBtn">


        📷 Upload Image



        <input

          type="file"

          accept="image/*"

          onChange={handleImage}

        />


      </label>






      {image && (


        <img

          src={image}

          className="preview"

          alt="preview"

        />


      )}







      {loading && (


        <h3>

          ⚡ AI is analyzing image...

        </h3>


      )}







      {result && (


        <div className="resultBox">



          <h2>

            🗑️ {result}

          </h2>




          <p>


            {result==="Organic" &&

            "🌱 Compost organic waste for natural fertilizer."}



            {result==="Plastic" &&

            "♻️ Send plastic waste for recycling."}



            {result==="Paper" &&

            "📄 Reuse or recycle paper materials."}



            {result==="Metal" &&

            "🔩 Metal items can be recycled efficiently."}



            {result==="Glass" &&

            "🍾 Recycle glass safely."}



          </p>



        </div>



      )}





    </div>



  );

}



export default Upload;