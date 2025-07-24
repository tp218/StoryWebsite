import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import './App.css';


//Code To Render The Stories 
const Story = () => {

    //Constants That Extract The Story Title From The URL
    const { STORY_TITLE } = useParams();
    const STORY_PATH = "/Stories/" + STORY_TITLE

    //Function That Renders Each Story
    function RenderPDF(pdf){
        return(
            <div>
                <iframe src={pdf} frameBorder="1000" width={1000} height={500}></iframe>
            </div>
        );
    }

    return (
        <div className="app-displayStory">
            {RenderPDF(STORY_PATH)}
        </div>
    );
}

export default Story