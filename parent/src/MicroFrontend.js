import React from 'react'

class MicroFrontend extends React.Component {
  componentDidMount() {
    const { name, host } = this.props;
    const scriptId = `micro-frontend-script-${name}`;

    if (document.getElementById(scriptId)) {
      this.renderMicroFrontend();
      return;
    }

    fetch(`${host}/asset-manifest.json`)
      .then(res => res.json())
      .then(manifest => {
        manifest.entrypoints.forEach(entrypoint => {
          const script = document.createElement('script');
          script.id = scriptId;
          script.src = `${host}/${entrypoint}`;
          script.onload = this.renderMicroFrontend;
          document.head.appendChild(script);
        })
      });
  }

  componentWillUnmount() {
    const { name } = this.props;

    if (window[`render${name}`]) {
      window[`unmount${name}`](`${name}-container`);
    }
  }

  render() {
    return <main id={`${this.props.name}-container`} />;
  }

  renderMicroFrontend = () => {
    const { name, history, basename } = this.props;
    if (window[`render${name}`]) {
      window[`render${name}`](`${name}-container`, history, basename);
    }
  };
}

export default MicroFrontend