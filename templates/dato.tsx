
interface datoProps { 
    subtitle: string;
    title: string | JSX.Element;
    bg: string;
    img: string;
}

export default function DatoTemplate (props: datoProps) {
    
return <div
    style={{
      height: "100vh",
      width:"100%",
      paddingLeft: "40px",
      paddingRight: "40px",
      paddingBottom: "4px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      fontFamily: "'Titillium Web', sans-serif",
      fontWeight: "400",
      color: "white",
      position: "relative"
    }}
  >
    <img height="110%" width="110%" style={{position: "absolute", top:0, left:0}} src={"https://www.datocms-assets.com/86369/1693241551-still2.jpg"}></img>
    <svg style={{display: "flex", position: "absolute", top:"40px", left:"40px"}} width="170" height="42" viewBox="0 0 341 82" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_4699_11679)">
    <path d="M92.062 42.126C92.062 28.842 99.136 22.254 113.014 22.254C118.684 22.254 122.032 23.28 124.895 24.576L122.465 31.218C118.846 30.246 117.335 29.868 113.122 29.813C106.21 29.706 101.405 33.593 101.405 41.585C101.405 49.578 106.481 53.844 114.203 53.844C117.928 53.844 120.143 53.52 123.057 52.764L125.002 59.676C121.33 61.026 118.145 61.512 113.231 61.512C99.245 61.512 92.062 54.654 92.062 42.126ZM150.71 46.23C150.71 41.478 149.523 37.86 144.552 37.86C139.693 37.86 138.344 41.478 138.344 46.285C138.344 51.36 139.856 54.438 144.661 54.438C149.523 54.438 150.709 51.252 150.709 46.23H150.71ZM129.27 46.5C129.27 36.725 135.373 30.731 144.715 30.731C155.191 30.731 159.891 36.618 159.891 46.231C159.891 56.274 153.3 61.621 144.228 61.621C134.509 61.621 129.27 55.735 129.27 46.5ZM162.81 31.488H172.476L177.444 47.472L178.956 53.358L180.631 47.472L186.137 31.488H195.589L184.14 60.972H173.447L162.81 31.488ZM216.27 53.466V48.823L211.845 48.932C209.197 48.985 207.255 49.849 207.255 52.009C207.255 53.737 208.928 54.493 210.548 54.493C212.276 54.493 214.328 54.006 216.271 53.467L216.27 53.466ZM198.505 52.548C198.505 45.096 205.311 43.584 211.143 43.584H216.271V41.747C216.271 39.156 214.597 38.4 210.927 38.4C208.009 38.4 204.877 39.048 202.123 39.695L200.343 33.161C203.691 31.866 207.579 30.786 212.276 30.786C221.403 30.786 225.075 33.378 225.075 40.02V53.142C225.075 54.114 226.047 54.33 227.72 54.384L227.396 61.188C226.695 61.242 225.991 61.242 225.289 61.242C221.727 61.242 217.947 60.648 217.137 58.11C214.977 59.785 211.899 61.458 208.657 61.458C202.179 61.458 198.505 58.434 198.505 52.548ZM234.419 20.255H243.437V60.973H234.419V20.255ZM268.441 43.206C268.549 39.642 266.983 37.158 264.067 37.158C260.989 37.158 258.992 39.318 258.829 43.206H268.441ZM249.593 46.661C249.593 34.62 255.913 30.786 264.823 30.786C274.111 30.786 277.676 36.834 277.676 45.744V48.984H258.56C258.507 53.628 262.177 54.492 266.873 54.492C268.873 54.492 272.221 53.844 275.3 53.304L276.65 60.161C273.356 61.134 269.144 61.621 265.58 61.621C255.86 61.621 249.593 58.434 249.593 46.661ZM283.835 31.488H292.853V34.458C294.636 33.108 298.524 30.731 302.467 30.731C311.7 30.731 312.348 35.807 312.348 42.504V60.973H303.383V43.26C303.383 39.21 302.467 38.508 299.44 38.508C296.741 38.508 294.312 39.372 292.853 40.074V60.972H283.835V31.488ZM321.205 51.792V38.13H316.887V31.488H321.205V25.439H330.169V31.488H339.297V38.13H330.169V51.738C330.169 53.898 330.98 54.06 333.411 54.06C335.408 54.06 339.783 53.466 339.783 53.466L340.647 60.54C338.54 61.134 335.679 61.566 333.519 61.566C327.848 61.566 321.205 61.836 321.205 51.792ZM40.648 19.249V0.289001C18.188 0.289001 0 18.478 0 40.937C0 63.397 18.189 81.587 40.648 81.587V62.627C28.66 62.627 18.96 52.926 18.96 40.937C18.96 28.95 28.66 19.249 40.648 19.249Z" fill="white"/>
    <path d="M62.416 19.249C61.1711 19.249 59.9383 19.0038 58.7882 18.5274C57.638 18.051 56.5929 17.3527 55.7126 16.4724C54.8323 15.5921 54.134 14.547 53.6576 13.3968C53.1812 12.2467 52.936 11.0139 52.936 9.769C52.936 8.52407 53.1812 7.29133 53.6576 6.14116C54.134 4.991 54.8323 3.94593 55.7126 3.06563C56.5929 2.18533 57.638 1.48704 58.7882 1.01062C59.9383 0.534209 61.1711 0.289001 62.416 0.289001C64.9303 0.289002 67.3415 1.28778 69.1194 3.06563C70.8972 4.84347 71.896 7.25475 71.896 9.769C71.896 12.2833 70.8972 14.6945 69.1194 16.4724C67.3415 18.2502 64.9303 19.249 62.416 19.249Z" fill="#00D8D5"/>
    <path d="M62.257 81.586C59.7427 81.586 57.3315 80.5872 55.5536 78.8094C53.7758 77.0315 52.777 74.6203 52.777 72.106C52.777 69.5918 53.7758 67.1805 55.5536 65.4026C57.3315 63.6248 59.7427 62.626 62.257 62.626C64.7713 62.626 67.1825 63.6248 68.9604 65.4026C70.7382 67.1805 71.737 69.5918 71.737 72.106C71.737 74.6203 70.7382 77.0315 68.9604 78.8094C67.1825 80.5872 64.7713 81.586 62.257 81.586Z" fill="#FF4C8B"/>
    <path d="M62.337 40.937C62.337 52.926 52.637 62.627 40.648 62.627V19.248C52.636 19.248 62.337 28.948 62.337 40.936" fill="white"/>
    </g>
    <defs>
    <clipPath id="clip0_4699_11679">
    <rect width="340.64" height="81.293" fill="white" transform="translate(0 0.292999)"/>
    </clipPath>
    </defs>
    </svg>
    <div style={{display: "flex", width: "100%", justifyContent: "space-between", alignItems: "flex-end", gap: "1rem" }}>
        <div style={{display: "flex", justifyContent:"flex-end", flexDirection: "column", gap: "2rem", paddingBottom: "2rem"}}>
          <label className="header" style={{display: "flex", fontSize: "75px", maxWidth: "32rem", width:"100%", wordWrap: "break-word", lineHeight: "60px", fontWeight:200}}>
              {props.title ? props.title : `One unified API" <br/> <span class="second-br"> One billion possibilities </span>`}
          </label>
        </div>
        <img width={"600px"} height={"600px"}  src={props.img}></img>
    </div>
  </div>
}