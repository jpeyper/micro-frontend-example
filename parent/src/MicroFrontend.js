import React, { useEffect, useRef } from "react"

function MicroFrontend({ name, host, history, basename }) {
  const mfRef = useRef()
  useEffect(() => {
    const scriptId = `micro-frontend-script-${name}`
    const mfContainer = mfRef.current

    const renderMicroFrontend = () => {
      if (window[`render${name}`]) {
        window[`render${name}`](mfContainer, history, basename)
      }
    }

    const unmountMicroFrontend = () => {
      console.log(`unmounting ${name}`, mfContainer)
      if (window[`unmount${name}`]) {
        console.log(`actually unmounting ${name}`, mfContainer)
        window[`unmount${name}`](mfContainer);
      }
    }

    if (document.getElementById(scriptId)) {
      renderMicroFrontend()
      return unmountMicroFrontend
    }

    fetch(`${host}/asset-manifest.json`)
      .then(res => res.json())
      .then(manifest => {
        manifest.entrypoints.forEach(entrypoint => {
          const script = document.createElement("script")
          script.id = scriptId
          script.src = `${host}/${entrypoint}`
          script.onload = renderMicroFrontend
          document.head.appendChild(script)
        })
      })
    return unmountMicroFrontend
  }, [name, host, history, basename])

  return <main id={`${name}-container`} ref={mfRef} />
}

export default MicroFrontend
