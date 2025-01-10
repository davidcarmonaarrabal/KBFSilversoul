import ModsDiv from "./ModDiv";


const ModsMain: React.FC = () => {
    return (
        <div className="flex flex-col mb-4 gap-4 md:flex-row md:flex-wrap md:justify-center md:items-center">
            <ModsDiv url="/img/KeyboardMini.png" name="How does a Keyboard works?"
                link="/mods/HDAKW/" />

            <ModsDiv url="/img/Tape.png" name="Tape Mod"
                link="/mods/Tape/" />

            <ModsDiv url="/img/Isolation.png" name="Isolation"
                link="/mods/Isolation/" />

            <ModsDiv url="/img/Stab.png" name="Stabs Lube"
                link="/mods/Stab_lube/" />

            <ModsDiv url="/img/Switchlube.png" name="Switch lube"
                link="/mods/Switch_lube/" />

            <ModsDiv url="/img/BiggerKeycap.png" name="Keycaps"
                link="/mods/Keycaps/" />

            <ModsDiv url="/img/Welding.png" name="Welding"
                link="/mods/Welding/" />

            <ModsDiv url="/img/Switches.png" name="Types of Switches"
                link="/mods/Types_Switches/" />

            <ModsDiv url="/img/Connections.png" name="Types of Connections"
                link="/mods/Connections/" />

            <ModsDiv url="/img/IsoAnsi.png" name="ISO or ANSI"
                link="/mods/ISO_ANSI/" />
        </div>
    );
};

export default ModsMain;