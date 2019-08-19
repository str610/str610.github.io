(function() {
  function ReTab(props) {
    const [selected, setSelected] = React.useState(props.selected || 0);
    const tabs = [],
      panels = [];

    for (const tabItemDefinition of props.contentDefinition) {
      const uid = tabItemDefinition.uid;
      const tabHtmlId = `retab__tabslist__tab-${uid}`;
      const panelHtmlId = `retab__tabpanel-${uid}`;

      tabs.push({
        uid: uid,
        htmlId: tabHtmlId,
        panelHtmlId: panelHtmlId,
        content: tabItemDefinition.tab,
      });

      panels.push({
        uid: uid,
        htmlId: panelHtmlId,
        tabHtmlId: tabHtmlId,
        content: tabItemDefinition.panel,
      });
    }

    return React.createElement('div', { className: 'retab' }, [
      React.createElement(Tabs, {
        ariaLabel: props.ariaLabel,
        selected: selected,
        onTabSelected: setSelected,
        definition: tabs,
      }, null),
      (
        selected <= tabs.length ?
          React.createElement(Panel, {
            key: panels[selected].uid,
            controlledBy: panels[selected].tabHtmlId,
          }, panels[selected].content) :
          null
      )
    ]);
  }
  function Tabs({ ariaLabel, selected, onTabSelected, definition }) {
    return React.createElement(
      'div',
      {
        role: 'tablist',
        'aria-label': ariaLabel,
        className: 'retab__tablist',
      },
      definition.map((tabDefinition, index) => React.createElement(Tab, {
        key: tabDefinition.uid,
        id: tabDefinition.htmlId,
        controls: tabDefinition.panelHtmlId,
        isSelected: index === selected,
        onSelected: () => onTabSelected(index),
      }, tabDefinition.content))
    );
  }
  function Tab({ htmlId, controls, isSelected, onSelected, children }) {
    return React.createElement('button', {
      id: htmlId,
      role: 'tab',
      'aria-seleted': isSelected,
      'aria-controls': controls,
      onClick: onSelected,
      className: `retab__tablist__tab ${isSelected ? 'selected' : ''}`,
    }, children);
  }
  function Panel({ htmlId, controlledBy, children }) {
    return React.createElement('div', {
      id: htmlId,
      role: 'tabpanel',
      'aria-labelledby': controlledBy,
      className: 'retab__tabpanel',
    }, children);
  }


  function parseExperience(experience) {
    return {
      uid: Math.floor(100000 + Math.random() * 900000),
      tab: React.createElement(
        React.Fragment,
        null,
        [
          React.createElement('p', {className: 'tab-title'}, experience.role),
          React.createElement('p', {className: 'tab-subtitle'}, experience.company),
        ]
      ),
      panel: React.createElement(
        React.Fragment,
        null,
        [
          React.createElement('p', {className: 'tabpanel-title'}, experience.role),
          React.createElement('p', {className: 'tabpanel-subtitle'}, [
            React.createElement('span', {className: 'tabpanel-subtitle-company'}, experience.company),
            React.createElement('span', {className: 'tabpanel-subtitle-dates'}, [
              `${!experience.period.to ? 'Since ' + experience.period.from : experience.period.from}${!!experience.period.to ? ' - ' + experience.period.to : ''}`
            ]),
          ]),

          React.createElement('ul', {className: 'tabpanel-milestones'}, [
            experience.milestones.map(milestone => [
              React.createElement('li', null, milestone),
            ])
          ]),
        ]
      ),
    };
  }

  fetch('/data/experiences.json')
    .then(response => response.json())
    .then(data => data.experiences)
    .then(experience => experience.map(parseExperience))
    .then(content =>
      ReactDOM.render(
        React.createElement(ReTab, {
          selected: 0,
          ariaLabel: "Work experiences from most to least recent",
          contentDefinition: content,
        }),
        document.getElementById('experience-tabs')
      )
    );

})();
