import { createStore } from 'nanostores';

const activeTab = createStore(() => {
  activeTab.set('React');
});

function setActiveTab(tabName) {
  activeTab.set(tabName);
}

export { activeTab, setActiveTab };
