import * as React from "react";

export default function HeroSection() {

    let titleText = "Hi, my name is Emil!                 Im a 5th year master engineering student at LiU.";

    const [title , setTitle] = React.useState("");

    // Add one letter at a time to title, at an inteval of 100
    const addLetter = () => {
        if (title.length < titleText.length) {
            setTitle(title + titleText[title.length]);
        }
    }
    React.useEffect(() => {    
        //randomize the interval
        if(title.length == ""){
            const interval = setInterval(() => {
                addLetter();
            }, 500);
            return () => clearInterval(interval);
        }
        const interval = setInterval(() => {
            addLetter();
        }, 25 + Math.random() * 70 );
        return () => clearInterval(interval);
    }, [title]);

    return (
        <div className="section-1">
            <div className="content">
              <div className="text">
                <div>
                    <h1>
                        <span className="wave">&#128075;</span>  {title}<span className={title == "" || title.length == titleText.length ?"cursor blink":"cursor"}>|</span>
                    </h1>
                </div>
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque efficitur, mi eu porta consectetur, lacus enim sollicitudin nunc, a faucibus sapien lectus ut sapien. Nulla at hendrerit diam. Aliquam quis neque sem. Etiam in ante eget quam consequat pharetra. Nulla facilisi. Mauris orci nisl, consequat eu lobortis nec, commodo non velit. Ut sapien sem, lacinia in volutpat ac, aliquet nec mauris. Aliquam scelerisque nibh sit amet aliquam mollis.</p> */}
              </div>
            </div>
        </div>
    );
}