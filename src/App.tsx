import { useState } from 'react';
import { VoiceChat } from './pages/VoiceChat';
import { ScrapeForm } from './pages/ScrapeForm';
import ScenarioSelection from './components/ScenarioSelection';
import config from './config';
import './App.scss';

import { Scenario } from './components/ScenarioSelection';

function App() {
  const [scrapedContent, setScrapedContent] = useState<string>('');
  const [selectedScenario, setSelectedScenario] = useState<Scenario | null>(null);

  const handleScrapedContent = (content: string) => {
    setScrapedContent(content);
  };

  const handleScenarioSelect = (scenario: Scenario) => {
    setSelectedScenario(scenario);
  };

  return (
    <div className="app-container">
      {/* 
        Conditional rendering based on the selected scenario, config, and scraped content:
        1. If a scenario is selected, render the VoiceChat with the scenario and scraped content.
        2. If URL crawling is disabled (config.skipUrlCrawl is true), show the ScenarioSelection.
        3. If there's scraped content, render the VoiceChat with the scraped content.
        4. Otherwise, show the ScrapeForm.
      */}
      {selectedScenario ? (
        <VoiceChat scrapedContent={scrapedContent} selectedScenario={selectedScenario} />
      ) : config.skipUrlCrawl ? (
        <ScenarioSelection onSelect={handleScenarioSelect} />
      ) : scrapedContent ? (
        <VoiceChat scrapedContent={scrapedContent} selectedScenario={null} />
      ) : (
        <ScrapeForm onScrapedContent={handleScrapedContent} />
      )}
    </div>
  );
}

export default App;
