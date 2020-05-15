(this.webpackJsonpreminder=this.webpackJsonpreminder||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(6),l=a.n(o),r=(a(12),a(13),function(){return s.a.createElement("form",{className:"w-full max-w-sm",style:{marginBottom:"10px"}},s.a.createElement("div",{className:"flex items-center border-b border-b-2 border-teal-500 py-2"},s.a.createElement("input",{className:"appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none",type:"text",placeholder:"Search Task..."}),s.a.createElement("button",{className:"flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded",type:"button"},"Search")))}),c=a(1),i=a(2),u=a(4),d=a(3),m=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"max-w-lg min-w-full rounded overflow-hidden shadow-lg "},s.a.createElement("div",{className:"px-6 py-4"},s.a.createElement("div",{className:"font-bold text-xl mb-2"},this.props.title),s.a.createElement("p",{className:"text-gray-700 text-base"},this.props.content)),s.a.createElement("div",{className:"px-6 py-4"},s.a.createElement("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",onClick:function(){return e.props.delete(e.props.id)}},"Delete")))}}]),a}(s.a.Component),p=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).componentDidMount=function(){var e=window.localStorage;n.setState({tasks:JSON.parse(e.getItem("tasks"))})},n.pushNewTask=function(){var e=n.state.tasks;null===e&&(e=[]),e.push({title:n.state.task,content:n.state.description}),n.setState({tasks:e,task:"",description:""},(function(){window.localStorage.setItem("tasks",JSON.stringify(n.state.tasks))}))},n.finishTask=function(e){console.log(e);var t=n.state.tasks;null!==t&&(t.splice(e,1),console.log(t),n.setState({tasks:t},(function(){window.localStorage.setItem("tasks",JSON.stringify(n.state.tasks))})))},n.updateTask=function(e){n.setState({task:e.target.value})},n.updateDesc=function(e){n.setState({description:e.target.value})},n.state={tasks:[],task:"",description:""},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{style:{minWidth:"80%",maxWidth:"80%"}},s.a.createElement("div",{className:"w-full "},s.a.createElement("form",{className:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"},s.a.createElement("div",{className:"mb-4"},s.a.createElement("label",{className:"block text-gray-700 text-sm font-bold mb-2"},"Task Name"),s.a.createElement("input",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",value:this.state.task,id:"task",type:"text",placeholder:"Task",onChange:this.updateTask})),s.a.createElement("div",{className:"mb-6"},s.a.createElement("label",{className:"block text-gray-700 text-sm font-bold mb-2"},"Description"),s.a.createElement("textarea",{className:"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline",value:this.state.description,id:"Description",placeholder:"Description",onChange:this.updateDesc})),s.a.createElement("div",{className:"flex items-center justify-between"},this.state.task.length?s.a.createElement("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",type:"button",onClick:this.pushNewTask},"Add new task"):null))),s.a.createElement("div",null,null!=this.state.tasks?this.state.tasks.map((function(t,a){return s.a.createElement(m,{key:a,id:a,title:t.title,content:t.content,delete:e.finishTask})})):s.a.createElement("span",null,"No tasks found")))}}]),a}(s.a.Component);var h=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(r,null),s.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.d9f1bd51.chunk.js.map