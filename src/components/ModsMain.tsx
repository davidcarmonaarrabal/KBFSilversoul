import ModsDiv from "./ModDiv";


const ModsMain: React.FC = () => {
    return (
        <div className="flex flex-col mb-4 gap-4 md:flex-row">
            <ModsDiv url="/img/KeyboardMini.png" name="How does a Keyboard works?"
                link="/mods/HDAKW/" />

            <ModsDiv url="/img/Tape.png" name="Tape Mod"
                link="/mods/Tape/" />

            <ModsDiv url="/img/Isolation.png" name="Isolation"
                link="/mods/Isolation/" />

            <ModsDiv url="/img/Stab.png" name="Stabs Lube"
                link="/mods/Stab_lube   /" />
        </div>
    );
};

export default ModsMain;