import { useState } from 'react';

const Tab = ({ label, onClick, isActive }) => (
  <div
    style={{
      padding: '10px',
      cursor: 'pointer',
      borderBottom: isActive ? '2px solid blue' : 'none',
    }}
    onClick={onClick}
  >
    {label}
  </div>
);

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div style={{ display: 'flex', borderBottom: '1px solid #ccc' }}>
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            label={tab.label}
            onClick={() => handleTabClick(index)}
            isActive={index === activeTab}
          />
        ))}
      </div>
      <div style={{ padding: '10px' }}>{tabs[activeTab].content}</div>
    </div>
  );
};

const App = () => {
  const tabs = [
    { label: 'Tab 1', content: 'Вміст вкладки 1' },
    { label: 'Tab 2', content: 'Вміст вкладки 2' },
    { label: 'Tab 3', content: 'Вміст вкладки 3' },
  ];

  return (
    <div>
      <h1>Приклад вкладок</h1>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default App;
