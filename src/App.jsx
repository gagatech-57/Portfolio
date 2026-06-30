import { useState, useEffect, useRef } from "react";
import { Mail, ExternalLink, Code2, Database, Wrench, Terminal, Cpu, FileJson, FileCode } from "lucide-react";

function Github({ size = 20, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="currentColor"
      className={className}
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function Linkedin({ size = 20, className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="currentColor"
      className={className}
    >
      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
    </svg>
  );
}

const BRAND_DATA = {
  "HTML5": {
    bg: "bg-[#E34F26]",
    color: "text-white",
    path: "M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"
  },
  "CSS3": {
    bg: "bg-[#1572B6]",
    color: "text-white",
    path: "M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"
  },
  "JavaScript (ES6+)": {
    bg: "bg-[#F7DF1E]",
    color: "text-black",
    path: "M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"
  },
  "React.js": {
    bg: "bg-[#20232A]",
    color: "text-[#61DAFB]",
    path: "M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
  },
  "Node.js": {
    bg: "bg-[#181D28]",
    color: "text-[#339933]",
    path: "M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z"
  },
  "Express.js": {
    bg: "bg-[#1C1E26]",
    color: "text-white",
    path: "M12.262 16.666h1.146l6.975-9.325H19.22zm9.778 1.441v.004l-4.334-5.706-.557.74 4.873 6.682H.945V4.173h9.505l5.026 6.7.574-.772-4.374-5.928h.003l-.719-.945H0v17.544h24zM10.917 8.705a3.8 3.8 0 0 0-1.292-1.183q-.796-.45-1.916-.45c-.746 0-1.37.14-1.906.424a3.76 3.76 0 0 0-1.31 1.12 4.9 4.9 0 0 0-.75 1.581 7.17 7.17 0 0 0 0 3.696c.148.567.402 1.101.75 1.573a3.5 3.5 0 0 0 1.31 1.066q.803.39 1.906.389 1.77 0 2.739-.868.966-.867 1.328-2.457h-1.139q-.271 1.084-.977 1.734-.704.651-1.952.65-.812 0-1.392-.342a3.1 3.1 0 0 1-.957-.869 3.5 3.5 0 0 1-.551-1.182 5 5 0 0 1-.17-1.133 9 9 0 0 0-.015-.286 4.5 4.5 0 0 1 .015-.829c.047-.418.147-.83.296-1.223A3.7 3.7 0 0 1 5.54 9.05a2.9 2.9 0 0 1 .922-.742q.541-.28 1.246-.28c.47 0 .869.093 1.23.28q.541.281.922.742.379.461.587 1.057t.225 1.246H5.625l.004.957h6.182a7.3 7.3 0 0 0-.18-1.924 4.9 4.9 0 0 0-.715-1.68z"
  },
  "REST API": {
    bg: "bg-[#181D28]",
    color: "text-[#61DAFB]",
    path: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
  },
  "MongoDB": {
    bg: "bg-[#113228]",
    color: "text-[#13AA52]",
    path: "M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"
  },
  "Git": {
    bg: "bg-[#F05032]",
    color: "text-white",
    path: "M13.09 23.549a1.54 1.54 0 0 1-2.18 0L.451 13.089a1.54 1.54 0 0 1 0-2.179l7.191-7.19 2.733 2.733a1.85 1.85 0 0 0 .964 2.326v6.66a1.849 1.849 0 1 0 1.54 0V8.957l2.508 2.508a1.85 1.85 0 1 0 1.09-1.09l-2.634-2.634a1.85 1.85 0 0 0-2.378-2.377L8.73 2.63 10.91.451a1.54 1.54 0 0 1 2.179 0l10.459 10.46a1.54 1.54 0 0 1 0 2.179z"
  },
  "GitHub": {
    bg: "bg-[#181717]",
    color: "text-white",
    path: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
  },
  "VS Code": {
    bg: "bg-[#007ACC]",
    color: "text-white",
    path: "M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z"
  },
  "Postman": {
    bg: "bg-[#FF6C37]",
    color: "text-white",
    path: "M13.527.099C6.955-.744.942 3.9.099 10.473c-.843 6.572 3.8 12.584 10.373 13.428 6.573.843 12.587-3.801 13.428-10.374C24.744 6.955 20.101.943 13.527.099zm2.471 7.485a.855.855 0 0 0-.593.25l-4.453 4.453-.307-.307-.643-.643c4.389-4.376 5.18-4.418 5.996-3.753zm-4.863 4.861l4.44-4.44a.62.62 0 1 1 .847.903l-4.699 4.125-.588-.588zm.33.694l-1.1.238a.06.06 0 0 1-.067-.032.06.06 0 0 1 .01-.073l.645-.645.512.512zm-2.803-.459l1.172-1.172.879.878-1.979.426a.074.074 0 0 1-.085-.039.072.072 0 0 1 .013-.093zm-3.646 6.058a.076.076 0 0 1-.069-.083.077.077 0 0 1 .022-.046h.002l.946-.946 1.222 1.222-2.123-.147zm2.425-1.256a.228.228 0 0 0-.117.256l.203.865a.125.125 0 0 1-.211.117h-.003l-.934-.934-.294-.295 3.762-3.758 1.82-.393.874.874c-1.255 1.102-2.971 2.201-5.1 3.268zm5.279-3.428h-.002l-.839-.839 4.699-4.125a.952.952 0 0 0 .119-.127c-.148 1.345-2.029 3.245-3.977 5.091zm3.657-6.46l-.003-.002a1.822 1.822 0 0 1 2.459-2.684l-1.61 1.613a.119.119 0 0 0 0 .169l1.247 1.247a1.817 1.817 0 0 1-2.093-.343zm2.578 0a1.714 1.714 0 0 1-.271.218h-.001l-1.207-1.207 1.533-1.533c.661.72.637 1.832-.054 2.522zM18.855 6.05a.143.143 0 0 0-.053.157.416.416 0 0 1-.053.45.14.14 0 0 0 .023.197.141.141 0 0 0 .084.03.14.14 0 0 0 .106-.05.691.691 0 0 0 .087-.751.138.138 0 0 0-.194-.033z"
  }
};

function TechIcon({ name }) {
  const data = BRAND_DATA[name];
  if (!data) return null;
  return (
    <div className={`w-6 h-6 rounded-[6px] flex items-center justify-center ${data.bg} shadow-md overflow-hidden shrink-0`}>
      <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-3.5 h-3.5 fill-current ${data.color}`}
      >
        <path d={data.path} />
      </svg>
    </div>
  );
}

const GITHUB_USERNAME = "gagatech-57";

const SKILLS = {
  Frontend: {
    icon: <Code2 size={18} className="text-indigo-400" />,
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js"],
    accentClass: "border-indigo-500/20 text-indigo-400 bg-indigo-500/5",
  },
  Backend: {
    icon: <Terminal size={18} className="text-cyan-400" />,
    items: ["Node.js", "Express.js", "REST API"],
    accentClass: "border-cyan-500/20 text-cyan-400 bg-cyan-500/5",
  },
  Database: {
    icon: <Database size={18} className="text-emerald-400" />,
    items: ["MongoDB"],
    accentClass: "border-emerald-500/20 text-emerald-400 bg-emerald-500/5",
  },
  Tools: {
    icon: <Wrench size={18} className="text-violet-400" />,
    items: ["Git", "GitHub", "VS Code", "Postman"],
    accentClass: "border-violet-500/20 text-violet-400 bg-violet-500/5",
  },
};

const LEARNING = [
  "Advanced React",
  "Backend Development",
  "JWT Authentication",
  "MongoDB Atlas",
  "Render & Vercel Deployment",
];

const JOURNEY = [
  {
    year: "2023",
    title: "Started B.Sc Computer Science",
    desc: "Began my academic journey, developing core problem-solving mindsets and learning programming fundamentals.",
    icon: <Cpu size={16} className="text-indigo-400" />,
  },
  {
    year: "2024",
    title: "Entering Frontend Space",
    desc: "Mastered HTML, CSS, and modern JavaScript. Started building styled interfaces using React.",
    icon: <Code2 size={16} className="text-cyan-400" />,
  },
  {
    year: "2025",
    title: "MERN Stack Specialization",
    desc: "Learned server-side development, database schemas, JWT, and deployment systems (Vercel/Render).",
    icon: <Database size={16} className="text-emerald-400" />,
  },
  {
    year: "2026",
    title: "Full-Stack Graduation & Roles",
    desc: "Completing B.Sc degree. Seeking MERN developer positions and internships to build commercial systems.",
    icon: <Terminal size={16} className="text-violet-400" />,
  },
];

function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let particles = [];
    const particleCount = 50;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.45;
        this.vy = (Math.random() - 0.5) * 0.45;
        this.radius = Math.random() * 1.5 + 0.6;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(129, 140, 248, 0.25)";
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      ctx.strokeStyle = "rgba(99, 102, 241, 0.035)";
      ctx.lineWidth = 0.8;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />;
}

function SectionTitle({ index, title }) {
  return (
    <div className="flex items-center gap-4 mb-10">
      <span className="font-mono text-cyan-400 text-sm tracking-wider font-semibold">
        // {index}.
      </span>
      <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-100 via-slate-200 to-slate-400">
        {title}
      </h2>
      <div className="flex-1 h-px bg-gradient-to-r from-slate-800 via-slate-900 to-transparent" />
    </div>
  );
}

function ProjectSkeleton() {
  return (
    <div className="glass-card rounded-xl p-6 border border-slate-800/80 space-y-4">
      <div className="flex justify-between items-center">
        <div className="h-5 w-2/3 rounded-md skeleton-shimmer" />
        <div className="h-4 w-4 rounded-md skeleton-shimmer" />
      </div>
      <div className="space-y-2">
        <div className="h-4 w-full rounded-md skeleton-shimmer" />
        <div className="h-4 w-4/5 rounded-md skeleton-shimmer" />
      </div>
      <div className="flex gap-4 pt-4">
        <div className="h-4 w-16 rounded-full skeleton-shimmer" />
        <div className="h-4 w-12 rounded-full skeleton-shimmer" />
      </div>
    </div>
  );
}

function WorkstationMockup() {
  const [activeTab, setActiveTab] = useState("terminal");
  const [lines, setLines] = useState([]);
  
  const codeLines = [
    { type: "input", text: "npm run deploy" },
    { type: "output", text: "Building application packages..." },
    { type: "output", text: "Deploying production build to gunasekar.dev..." },
    { type: "input", text: "ping -c 3 api.gunasekar.dev" },
    { type: "output", text: "64 bytes from 104.21.68.99: icmp_seq=1 ttl=56 time=18.4 ms" },
    { type: "output", text: "64 bytes from 104.21.68.99: icmp_seq=2 ttl=56 time=19.2 ms" },
    { type: "output", text: "System is online and running successfully." }
  ];

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < codeLines.length) {
        const nextLine = codeLines[currentLine];
        setLines((prev) => [...prev, nextLine]);
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 850);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass-panel rounded-xl overflow-hidden border border-white/[0.05] shadow-2xl flex flex-col w-full">
      {/* Tabs list */}
      <div className="bg-[#0b0922]/80 px-4 pt-3 flex items-center gap-1.5 border-b border-white/[0.04] justify-between">
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveTab("terminal")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t-lg font-mono text-xs border-t border-x transition-colors duration-200 ${
              activeTab === "terminal"
                ? "bg-[#030014]/40 border-white/[0.05] text-cyan-400 font-semibold"
                : "bg-transparent border-transparent text-slate-500 hover:text-slate-300"
            }`}
          >
            <Terminal size={12} /> terminal.sh
          </button>
          <button
            onClick={() => setActiveTab("json")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t-lg font-mono text-xs border-t border-x transition-colors duration-200 ${
              activeTab === "json"
                ? "bg-[#030014]/40 border-white/[0.05] text-indigo-400 font-semibold"
                : "bg-transparent border-transparent text-slate-500 hover:text-slate-300"
            }`}
          >
            <FileJson size={12} /> profile.json
          </button>
          <button
            onClick={() => setActiveTab("css")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-t-lg font-mono text-xs border-t border-x transition-colors duration-200 ${
              activeTab === "css"
                ? "bg-[#030014]/40 border-white/[0.05] text-emerald-400 font-semibold"
                : "bg-transparent border-transparent text-slate-500 hover:text-slate-300"
            }`}
          >
            <FileCode size={12} /> developer.css
          </button>
        </div>
        <div className="flex items-center gap-1 mb-2">
          <span className="w-2 h-2 rounded-full bg-rose-500/80" />
          <span className="w-2 h-2 rounded-full bg-amber-500/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
        </div>
      </div>

      {/* Tabs contents */}
      <div className="p-5 min-h-[220px] bg-[#030014]/20 overflow-x-auto leading-relaxed select-text font-mono text-xs">
        {activeTab === "terminal" && (
          <div className="space-y-2">
            {lines.map((line, idx) => (
              <div key={idx} className="whitespace-pre">
                {line.type === "input" ? (
                  <span className="text-cyan-400">
                    <span className="text-slate-600 font-semibold">~ </span>
                    {line.text}
                  </span>
                ) : (
                  <span className="text-slate-300">{line.text}</span>
                )}
              </div>
            ))}
            {lines.length < codeLines.length && (
              <span className="inline-block w-1.5 h-3.5 bg-cyan-400 animate-pulse ml-1 align-middle" />
            )}
          </div>
        )}

        {activeTab === "json" && (
          <pre className="text-indigo-300">
            {JSON.stringify(
              {
                name: "GuNaseKaR",
                role: "MERN Stack Web Developer",
                education: "B.Sc Computer Science",
                year: "3rd Year Student",
                hobbies: ["Building Apps", "Problem Solving", "Tech Research"],
              },
              null,
              2
            )}
          </pre>
        )}

        {activeTab === "css" && (
          <pre className="text-emerald-300">
{`.developer {
  background: var(--mern-stack-gradient);
  speed-of-learning: ultra-fast;
  focus: clean-functional-design;
  collaboration: open-to-learn;
}

#portfolio-redesign {
  animation: wow-effect 3s forwards;
}`}
          </pre>
        )}
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const updateMouse = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setOpacity(1);
    };
    window.addEventListener("mousemove", updateMouse);
    return () => window.removeEventListener("mousemove", updateMouse);
  }, []);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load repos");
        return res.json();
      })
      .then((data) => {
        const cleaned = Array.isArray(data)
          ? data
              .filter((r) => !r.fork)
              .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
          : [];
        setRepos(cleaned);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <div className="relative min-h-screen bg-[#030014] text-slate-200 font-sans overflow-x-hidden selection:bg-indigo-500/30 selection:text-white">
      {/* Interactive Particle Canvas */}
      <ParticleCanvas />

      {/* Background Interactive mouse glow */}
      <div
        className="cursor-glow-element hidden md:block"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          opacity: opacity,
        }}
      />

      {/* Cosmic background orbs */}
      <div className="absolute top-1/6 left-1/10 w-96 h-96 rounded-full bg-indigo-700/10 blur-[120px] animate-drift pointer-events-none z-0" />
      <div className="absolute top-1/2 right-1/10 w-[450px] h-[450px] rounded-full bg-cyan-600/5 blur-[150px] animate-drift-reverse pointer-events-none z-0" />

      {/* Grid overlay */}
      <div className="grid-bg z-0" />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-[#030014]/65 border-b border-white/[0.04]">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="group font-mono text-lg text-cyan-400 font-bold tracking-tight">
            gunasekar<span className="text-indigo-400 group-hover:text-cyan-300 transition-colors">.dev</span>
          </a>
          <div className="hidden sm:flex items-center gap-8 text-sm font-medium text-slate-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors relative py-1 group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#journey" className="hover:text-cyan-400 transition-colors relative py-1 group">
              Journey
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors relative py-1 group">
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors relative py-1 group">
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors relative py-1 group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </a>
          </div>
        </div>
      </nav>

      {/* Main Container */}
      <div className="relative z-10">
        {/* Hero Section */}
        <header className="max-w-5xl mx-auto px-6 pt-24 pb-20 grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 font-mono text-xs tracking-wider animate-pulse">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              Available for Internships
            </div>
            <div className="space-y-2">
              <p className="font-mono text-cyan-400 text-sm tracking-widest font-semibold">
                HI, MY NAME IS
              </p>
              <h1 className="text-5xl sm:text-7xl font-extrabold text-slate-100 tracking-tight leading-[1.1]">
                Gunasekar.
              </h1>
              <h2 className="text-3xl sm:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-slate-400 via-indigo-300 to-cyan-400 leading-tight">
                I build MERN stack web apps.
              </h2>
            </div>
            <p className="max-w-xl text-slate-400 leading-relaxed text-base sm:text-lg">
              B.Sc Computer Science student from Tamil Nadu, India, focused on
              crafting clean, dynamic, and full-stack solutions with React, Node.js, Express, and MongoDB.
            </p>
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a
                href="#projects"
                className="btn-primary-glow px-7 py-3.5 rounded-lg bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/25 flex items-center gap-2"
              >
                Explore Projects
              </a>
              <a
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 rounded-lg border border-slate-800 bg-slate-950/40 text-slate-300 font-semibold text-sm hover:bg-slate-900 hover:text-white transition-all flex items-center gap-2.5"
              >
                <Github size={18} /> GitHub Profile
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/[0.04] bg-[#0c0a21]/50 group animate-float">
              <img
                src="/hero-illustration.png"
                alt="Programming illustration"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-60" />
            </div>
            <WorkstationMockup />
          </div>
        </header>

        {/* About Section */}
        <section id="about" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-900/60">
          <SectionTitle index="01" title="About Me" />
          <div className="grid md:grid-cols-5 gap-10 mt-8">
            <div className="md:col-span-3 text-slate-400 leading-relaxed space-y-5 text-base">
              <p>
                I'm a passionate self-taught MERN Stack Developer currently pursuing my B.Sc in Computer
                Science. My journey into web development began with curiosity about how complex
                systems are wired from end to end.
              </p>
              <p>
                Since then, I've loved building robust server architectures, organizing schema structures, and 
                designing intuitive, interactive interfaces. I aim to write clean, semantic code that delivers
                excellent user experiences.
              </p>
              <p>
                Right now, I am expanding my skills in core backend systems (JWT, MongoDB Atlas, API design) and 
                aim to launch my career as a full-time Software Engineer.
              </p>
            </div>
            <div className="md:col-span-2">
              <div className="glass-card rounded-xl p-6 border border-slate-800/80 space-y-4">
                <h4 className="font-mono text-cyan-400 text-xs tracking-wider uppercase font-semibold">
                  Quick Details
                </h4>
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex justify-between py-2 border-b border-slate-800/60">
                    <span className="text-slate-500">Degree</span>
                    <span className="text-slate-300 text-right">B.Sc Computer Science</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800/60">
                    <span className="text-slate-500">Year</span>
                    <span className="text-slate-300 text-right">3rd Year</span>
                  </div>
                  <div className="flex justify-between py-2 border-b border-slate-800/60">
                    <span className="text-slate-500">Location</span>
                    <span className="text-slate-300 text-right">Tamil Nadu, India</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-slate-500">Focus</span>
                    <span className="text-cyan-400 text-right">MERN / Full Stack</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Timeline Section */}
        <section id="journey" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-900/60">
          <SectionTitle index="02" title="Academic & Coding Journey" />
          <div className="relative mt-12 pl-10 md:pl-0">
            <div className="timeline-track" />
            <div className="space-y-12">
              {JOURNEY.map((item, idx) => (
                <div key={idx} className="relative md:flex md:justify-between items-center w-full">
                  <div className="hidden md:block w-[45%]" />
                  <div className="absolute left-[-30px] md:left-[50%] md:translate-x-[-50%] flex items-center justify-center w-8 h-8 rounded-full bg-[#0d0b28] border border-white/[0.08] shadow-lg z-10">
                    {item.icon}
                  </div>
                  <div className="glass-card rounded-xl p-6 border border-slate-800/80 md:w-[45%]">
                    <span className="font-mono text-xs font-bold text-cyan-400 tracking-wider">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-bold text-slate-200 mt-1">{item.title}</h3>
                    <p className="text-sm text-slate-400 mt-2 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-900/60">
          <SectionTitle index="03" title="Skills & Tools" />
          <div className="grid sm:grid-cols-2 gap-6 mt-8">
            {Object.entries(SKILLS).map(([group, data]) => (
              <div
                key={group}
                className="glass-card rounded-xl p-6 border border-slate-800/80 hover:border-slate-700/80"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  {data.icon}
                  <h3 className="text-base font-bold text-slate-200">{group}</h3>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {data.items.map((s) => (
                    <span
                      key={s}
                      className={`inline-flex items-center gap-2 text-xs font-mono pl-1.5 pr-3 py-1 rounded-lg border ${data.accentClass} font-semibold`}
                    >
                      <TechIcon name={s} />
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 glass-card border border-dashed border-slate-800 rounded-xl p-6">
            <h3 className="text-sm font-bold text-slate-300 mb-4 flex items-center gap-2">
              <span className="animate-pulse w-2 h-2 rounded-full bg-cyan-400" />
              🌱 Currently Learning & Deepening
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {LEARNING.map((s) => (
                <span
                  key={s}
                  className="text-xs font-mono bg-cyan-400/5 text-cyan-300 px-3.5 py-1.5 rounded-full border border-cyan-400/10 font-medium"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="max-w-5xl mx-auto px-6 py-20 border-t border-slate-900/60">
          <SectionTitle index="04" title="Featured Projects" />
          <p className="text-slate-400 text-sm -mt-4 mb-8 font-mono">
            // Loaded dynamically from github.com/{GITHUB_USERNAME}
          </p>

          {loading && (
            <div className="grid sm:grid-cols-2 gap-6">
              <ProjectSkeleton />
              <ProjectSkeleton />
              <ProjectSkeleton />
              <ProjectSkeleton />
            </div>
          )}

          {error && (
            <div className="glass-card border-dashed border-red-500/20 bg-red-500/5 rounded-xl p-8 text-center text-slate-400 max-w-lg mx-auto">
              <Terminal className="mx-auto text-red-400 mb-3" size={24} />
              <p className="font-mono text-sm">
                Failed to load repositories from GitHub. Please check your network or try refreshing.
              </p>
            </div>
          )}

          {!loading && !error && (
            <div className="grid sm:grid-cols-2 gap-6">
              {repos.slice(0, 6).map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="group glass-card rounded-xl p-6 border border-slate-800/80 hover:border-indigo-500/40 hover:-translate-y-1 block"
                >
                  <div className="flex items-start justify-between">
                    <h3 className="font-bold text-slate-100 group-hover:text-indigo-400 transition-colors text-lg tracking-tight">
                      {repo.name}
                    </h3>
                    <ExternalLink
                      size={16}
                      className="text-slate-500 group-hover:text-indigo-400 transition-colors shrink-0 mt-1"
                    />
                  </div>
                  <p className="text-sm text-slate-400 mt-3 line-clamp-2 min-h-[2.5rem] leading-relaxed">
                    {repo.description || "No description provided. Click to view repository on GitHub."}
                  </p>
                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-900/40 text-xs font-mono text-slate-500">
                    {repo.language && (
                      <span className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400/50" />
                        <span className="text-slate-400 font-medium">{repo.language}</span>
                      </span>
                    )}
                    <span className="flex items-center gap-1">★ {repo.stargazers_count}</span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-5xl mx-auto px-6 py-28 border-t border-slate-900/60 text-center">
          <p className="font-mono text-cyan-400 text-sm mb-3 tracking-widest font-semibold uppercase">
            05. What's Next?
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-slate-400 mt-4 max-w-lg mx-auto text-base leading-relaxed">
            I am actively looking for internship roles or developer opportunities. Whether you
            have a question, want to collaborate, or just say hi, I will get back to you!
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="mailto:gunaknn@gmail.com"
              className="btn-primary-glow px-8 py-3.5 rounded-lg bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/25 flex items-center gap-2.5"
            >
              <Mail size={16} /> Say Hello
            </a>
          </div>
          <div className="mt-12 flex items-center justify-center gap-6 text-slate-500">
            <a
              href={`https://github.com/${GITHUB_USERNAME}`}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full border border-slate-800 bg-slate-950/20 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-[#0b0922] transition-all hover:-translate-y-1"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-full border border-slate-800 bg-slate-950/20 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-[#0b0922] transition-all hover:-translate-y-1"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:gunaknn@gmail.com"
              className="p-3 rounded-full border border-slate-800 bg-slate-950/20 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-[#0b0922] transition-all hover:-translate-y-1"
            >
              <Mail size={20} />
            </a>
          </div>
        </section>

        <footer className="text-center py-8 text-slate-600 text-xs font-mono border-t border-slate-900/60">
          Designed & Built by Gunasekar — 2026
        </footer>
      </div>
    </div>
  );
}