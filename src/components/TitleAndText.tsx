//libraries

import { LightTheme,DarkTheme } from "./Types"

//function

export default function TitleAndText(myStyle:{myStyle: LightTheme|DarkTheme}) {
  
  return (
    <div id="title" style={myStyle.myStyle}>
        <h1>react task</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex fugiat, officia voluptatem magni enim voluptas, corporis labore asperiores reiciendis autem magnam nam sint adipisci cum cumque id aliquam nesciunt laboriosam.</p>
    </div>
  )
}
