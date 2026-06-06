import { Link } from "react-router-dom";

export default function BackToResources() {

  return (

    <div style={{ textAlign: "center", padding: "48px 24px 64px" }}>

      <Link to="/guides-and-resources">

        <img

          src="/back-to-resources.webp"

          alt="← Back to Resources"

          style={{

            maxWidth: 480,

            width: "100%",

            height: "auto",

            display: "inline-block",

            transition: "transform 0.25s ease, opacity 0.25s ease",

          }}

          onMouseEnter={e => {

            (e.currentTarget as HTMLImageElement).style.transform = "scale(1.03)";

            (e.currentTarget as HTMLImageElement).style.opacity = "0.9";

          }}

          onMouseLeave={e => {

            (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";

            (e.currentTarget as HTMLImageElement).style.opacity = "1";

          }}

        />

      </Link>

    </div>

  );

}
