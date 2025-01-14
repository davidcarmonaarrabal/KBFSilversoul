import ModsDiv from "./ModDiv";

type ModItem = {
    url: string;
    name: string;
    link: string;
};

const modItems: ModItem[] = [
    { url: "/img/KeyboardMini.png", name: "How does a Keyboard works?", link: "/mods/HDAKW/" },
    { url: "/img/KeyboardsSize.png", name: "Keyboards sizes", link: "/mods/KS/" },
    { url: "/img/Tape.png", name: "Tape Mod", link: "/mods/Tape/" },
    { url: "/img/Isolation.png", name: "Isolation", link: "/mods/Isolation/" },
    { url: "/img/Stab.png", name: "Stabs Lube", link: "/mods/Stab_lube/" },
    { url: "/img/Switchlube.png", name: "Switch lube", link: "/mods/Switch_lube/" },
    { url: "/img/BiggerKeycap.png", name: "Keycaps", link: "/mods/Keycaps/" },
    { url: "/img/Welding.png", name: "Welding", link: "/mods/Welding/" },
    { url: "/img/Switches.png", name: "Types of Switches", link: "/mods/Types_Switches/" },
    { url: "/img/Connections.png", name: "Types of Connections", link: "/mods/Connections/" },
    { url: "/img/IsoAnsi.png", name: "ISO or ANSI", link: "/mods/ISO_ANSI/" },
];

const ModsMain: React.FC = () => {
    const renderMods = () => 
        modItems.map((item, index) => (
            <ModsDiv key={index} url={item.url} name={item.name} link={item.link} />
        ));

    return (
        <div className="flex flex-col mb-4 gap-4 md:flex-row md:flex-wrap md:justify-center md:items-center">
            {renderMods()}
        </div>
    );
};

export default ModsMain;
