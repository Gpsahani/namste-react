const heading = React.createElement("div",{id:"parent"},
[React.createElement("h1",{},"hello h1 tag"),React.createElement("h2",{},"hello h2 tag")]
)
const root = ReactDOM.createRoot(document.getElementById("root"));  
root.render(heading);