import { FloatingNavDemo } from "@/Components/Header/Headernav";
import { GoogleGeminiEffectDemo } from "@/Components/Mainsection/Gemnieffect";
import { GlobeDemo } from "@/Components/Mainsection/Globe";
import { PlaceholdersAndVanishInputDemo } from "@/Components/Mainsection/Inputeffect";
import { TextGenerateEffectDemo } from "@/Components/Mainsection/Texteffect";

export default function Home() {
  return (
    <main>
      <header>
        <FloatingNavDemo/>
      </header>
      
<GlobeDemo/>
<div>

<TextGenerateEffectDemo/>
</div>
<div>
  <GoogleGeminiEffectDemo/>
<PlaceholdersAndVanishInputDemo/>
</div>
      

     
    </main>
  );
}
