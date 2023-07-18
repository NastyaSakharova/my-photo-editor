import {useEffect, useRef} from "react";

const Canvas = (props) => {
    const canvasRef = useRef()

    useEffect(() => {

        if (canvasRef.current) {
            const canvas = canvasRef.current.getContext('2d')
            
            const image = new Image()
            image.onload = function () {
                canvas.drawImage(image, 0, 0);
            };
            image.src = props.image
        }
    }, [])

    const onProcessClick = () => {
        const canvas = canvasRef.current.getContext('2d')
        const image = canvas.getImageData(0, 0, 385, 515)
        const newImage = props.processImage(image)
        canvas.putImageData(newImage, 0, 0)
    }

    return (
        <>
            <canvas ref={canvasRef} width={385} height={515}/>
            <p/>
            <button class="button-nice" onClick={onProcessClick}>Обработать</button>
        </>
    )
}

export default Canvas