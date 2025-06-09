import { useParams } from "react-router-dom/cjs/react-router-dom.min";



const Story = () => {

    const { storypath } = useParams();


    function RenderPDF(pdf){
        return(
            <div>
                <iframe src={pdf} frameborder="0"></iframe>
            </div>
        );
    }

    return (
        <div>
            {RenderPDF(storypath)}
        </div>
    );
}

export default Story