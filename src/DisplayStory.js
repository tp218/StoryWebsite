import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import './App.css';



const Story = () => {

    const { storytitle } = useParams();
    const storypath = "/Stories/" + storytitle


    function RenderPDF(pdf){
        return(
            <div>
                <iframe src={pdf} frameBorder="1000" width={1000} height={500}></iframe>
            </div>
        );
    }

    return (
        <div className="App">
            {RenderPDF(storypath)}
        </div>
    );
}

export default Story