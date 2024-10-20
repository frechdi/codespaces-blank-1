import React from 'react';
import config from '../config';
import './ScenarioSelection.scss';
import ProgressBar from './ProgressBar';

import annaImage from '../images/anna.webp';
import petraImage from '../images/petra.webp';
import amelieImage from '../images/amelie.webp';

export interface Character {
  visualDescription: string;
  confidenceLevel: number;
  image: string;
  emoji: string;
}

export interface Scenario {
  title: string;
  description: string;
  character: Character;
}

const scenarios: Scenario[] = [
  {
    title: "Gespräch am Rhein in Basel",
    description: "Spätnachmittag, sonnig",
    character: {
      visualDescription: "Eine Frau sitzt an einem **sonnigen Spätnachmittag** am **Ufer des Rheins** in Basel. Die Sonne steht tief und reflektiert **golden** auf dem Wasser, was eine **friedliche Atmosphäre** schafft. Sie trägt **leichte, lockere Kleidung**, vielleicht im **Boho-Stil**, und scheint **tief in Gedanken versunken** zu sein. Neben ihr liegen ein **Skizzenbuch** und eine **Yogamatte**, was darauf hindeuten könnte, dass sie etwas **Kreatives** plant oder sich kürzlich **entspannt** hat. Ein **sanftes Lächeln** spielt um ihre Lippen, während sie auf das Wasser schaut. Es wirkt, als ob sie den **Moment genießt** und sich von der Umgebung **inspirieren** lässt.",
      confidenceLevel: 80,
      image: annaImage,
      emoji: "🎨"
    }
  },
  {
    title: "Einkauf im Migros in Zürich",
    description: "Samstag, Mittag",
    character: {
      visualDescription: "In einem **belebten Supermarkt** in Zürich geht eine Frau **konzentriert** durch die Gänge. Sie trägt **praktische, ordentliche Kleidung** und hält eine **Einkaufsliste** in der Hand. Ihr Blick ist **scharf und fokussiert**, als ob sie die Produkte im Regal **genau unter die Lupe** nimmt, vielleicht um die **beste Wahl** zu treffen. Ihr Einkaufswagen ist bereits zur Hälfte gefüllt, was vermuten lässt, dass sie **strukturiert** vorgeht. Ihre Haltung strahlt **Entschlossenheit** aus, und sie scheint ihre Aufgaben **effizient** erledigen zu wollen, ohne viel Zeit zu verlieren.",
      confidenceLevel: 60,
      image: petraImage,
      emoji: "💼"
    }
  },
  {
    title: "Papa Joe's in Basel",
    description: "Freitagabend",
    character: {
      visualDescription: "Eine Frau sitzt **allein** in einem **lebhaften Restaurant** in Basel, während um sie herum das **geschäftige Treiben** des Abends tobt. Sie trägt **lässige, aber dennoch stilvolle Kleidung** und hat ein Glas Wasser und ein **aufgeschlagenes Buch** vor sich auf dem Tisch. Doch ihre Aufmerksamkeit gilt nicht dem Buch – stattdessen schaut sie **nachdenklich** auf ihr **Handy**. Ihr Gesichtsausdruck verrät, dass sie über etwas **grübelt** oder nachdenkt. Sie scheint die Geräusche um sich herum **kaum wahrzunehmen** und wirkt, als ob sie sich eine **kleine Auszeit** vom Trubel des Tages gönnt, um in Ruhe ihren Gedanken nachzugehen. Plötzlich **verschüttet** sie versehentlich ihr **Bier**.",
      confidenceLevel: 10,
      image: amelieImage,
      emoji: "🍺"
    }
  }
];

interface ScenarioSelectionProps {
  onSelect: (scenario: Scenario) => void;
}

const ScenarioSelection: React.FC<ScenarioSelectionProps> = ({ onSelect }) => {
  return (
    <div className="scenario-selection">
      <h2>Ansprech-Simulator: Charaktere in Schweizer Szenarien</h2>
      <p className="subtitle">Erleben Sie Interaktionen mit einzigartigen Persönlichkeiten in alltäglichen Schweizer Situationen</p>
      <div className="scenario-grid">
        {scenarios.map((scenario, index) => (
          <div key={index} className="scenario-card">
            <img src={scenario.character.image} alt="Character" className="character-image" />
            <h3 className="scenario-title">{scenario.title} {scenario.character.emoji}</h3>
            <p className="scenario-description"><em>{scenario.description}</em></p>
            <div className="character-profile">
              <p className="visual-description" dangerouslySetInnerHTML={{__html: scenario.character.visualDescription.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}} />
              <div className="personality-traits">
                <h5>Selbstsicherheit:</h5>
                <ProgressBar trait="Selbstsicherheit" percentage={scenario.character.confidenceLevel} />
              </div>
            </div>
            <button onClick={() => onSelect(scenario)} className="select-button">Diese Person ansprechen</button>
          </div>
        ))}
      </div>
      {config.skipUrlCrawl && <p className="note">Hinweis: URL-Crawling ist deaktiviert.</p>}
    </div>
  );
};

export default ScenarioSelection;
