import logo from "./logo.svg";
import "./App.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

function App() {
  const handlePdf = () => {
    let input = document.querySelector(".App");

    input = html2canvas(input).then((canvas) => {
      const imageData = canvas.toDataURL("image/png", 1.0);
      const pdf = new jsPDF("p", "px", "a4");
      let imgWidth = 793.92;
      let pageHeight = pdf.internal.pageSize.getHeight();
      let imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;
      // let page = pdf.internal.getNumberOfPages();
      console.log("image", imgHeight);
      console.log("image", imgHeight);

      pdf.addImage(imageData, "JPEG", 0, position);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imageData, "JPEG", 0, position);
        heightLeft -= pageHeight;
        // console.log("heightLeft", heightLeft);
        // console.log("pageHeight", pageHeight);
        window.open(
          pdf.output("bloburl", {
            filename: "new-file.pdf",
          }),
          "_blank"
        );
      }
    });
  };

  return (
    <>
      <button onClick={handlePdf}>Click pdf</button>
      <div
        className="App"
        style={{
          width: "793.92px",
          padding: "75px 56px 75px 113px",
        }}
      >
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
        tienkhanh dang test o day ne
      </div>
    </>
  );
}

export default App;
