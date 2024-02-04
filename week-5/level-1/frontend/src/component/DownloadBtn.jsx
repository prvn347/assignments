export function DownloadBtn (){



    return (
        <div>
              <button
              onClick={() => {
                fetch("http://localhost:3000/remove", {
                  method: "DELETE",
                  body: JSON.stringify({
                    id: card._id,
                  }),
                  headers: {
                    "Content-type": "application/json",
                  },
                })
                  .then(async function (res) {
                    const json = await res.json();
                    card = [...card, json];
                  })
                  .catch((error) => {
                    console.error("Error:", error);
                  });
              }}
              style={{ background: "#0068e7", margin: 10 }}
            >
              DELETE
            </button>
            <button
           onMouseEnter={() => {
            buttonStyle.background = "#37ff00"; // Change color on hover
          }}
              onClick={() => handleDownload(card._id)}
              style={{ background: "#0068e7", margin: 10, 
             }}
            >
              Download
            </button>
        </div>
    )
}