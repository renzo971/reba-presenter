import * as React from 'react';

function Logo({ height = 500, color = 'default', ...rest }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 972.273 706.284"
      height={height}
      {...rest}
    >
      <defs>
        <symbol id="prefix__a" viewBox="0 0 793.355 105.075">
          <path
            d="M83.56 96.31a6.794 6.794 0 006.893 5.926h1.506v.946h-28.42v-.893h1.473a3.844 3.844 0 003.689-4.039l-3.742-34.273L47.24 94.619s-3.52 5.859-3.648 10.456h-.892l-24.34-40.863-3.725 34.038a3.85 3.85 0 003.687 4.04h1.473v.894H0v-.946h1.498a6.734 6.734 0 006.92-5.926l7.837-60.664h.878l29.349 48.256 28.137-48.227h.864zM158.203 74.84c0 18.241-13.428 29.574-33.502 29.574-20.015 0-33.442-11.333-33.442-29.573 0-18.304 13.427-29.614 33.442-29.614 20.074 0 33.502 11.31 33.502 29.614zm-14.55.001c0-16.013-7.429-25.896-18.952-25.896-11.465 0-18.952 9.883-18.952 25.896 0 15.95 7.487 25.835 18.952 25.835 11.523 0 18.951-9.884 18.951-25.835zM229.62 46.434v.945h-1.603a5.048 5.048 0 00-5.206 4.699V93.41a53.435 53.435 0 001.026 11.004h-.848l-43.462-38.273v31.263a5.043 5.043 0 005.212 4.836h1.574v.945h-26.457v-.945h1.543a5.007 5.007 0 005.212-4.836V55.841a50.536 50.536 0 00-1.03-10.708l.904.026 43.352 38.15V52.214a4.955 4.955 0 00-5.153-4.836h-1.603v-.945zM284.654 59.896h-.97v-.88c.038-5.392-3.129-8.811-8.655-8.89h-10.923v47.18a5.106 5.106 0 005.217 4.938h1.003v.945h-26.138v-.945h1.003a5.143 5.143 0 005.22-5.024V50.126h-10.927c-5.527.08-8.655 3.5-8.655 8.89v.881h-.971V44.891a37.707 37.707 0 009.93 1.45H274.7c3.542 0 8.725-.85 9.944-1.45zM331.496 103.174h-44.483v-.946h1.133a5.049 5.049 0 005.121-4.943V52.307a5.01 5.01 0 00-5.12-4.938h-1.134v-.946h33.278a37.16 37.16 0 009.825-1.45V60.06h-.979v-.88c0-5.453-3.13-8.872-8.6-8.951h-13.625v22.93h10.759c4.447-.084 7.22-3.245 7.22-7.479v-.607h.98v20.019h-.98v-.669c0-4.195-2.724-7.337-7.1-7.474h-10.88v22.434h11.385c7.996-.077 13.478-5.222 15.955-13.59h.914zM415.28 79.468l1.112 14.267c-3.695 5.995-11.437 10.677-23.745 10.677-21.053-.094-34.107-10.884-34.107-29.635 0-18.534 12.751-29.551 34.107-29.551 8.648 0 16.328 1.877 21.303 4.299v15.027h-.733c-3.207-11.62-10.231-15.607-19.602-15.607-13.751 0-20.658 10.224-20.658 25.648 0 15.69 7.281 25.75 19.7 26.047 13.494.044 19.55-5.762 21.888-21.167zM473.557 96.96c1.83 3.799 4.839 5.28 7.43 5.28h.708v.946h-27.798v-.938h.743c2.183 0 4.634-1.847 3.223-5.259l-3.67-8.646h-20.034l-3.778 8.773c-1.299 3.33 1.13 5.132 3.286 5.132h.743v.938h-18.893v-.946h.757a8.328 8.328 0 007.232-4.934l19.511-42.018c.653-1.459 4.125-8.797 4.414-11.467h.803zM452.61 84.623l-8.365-19.707-8.486 19.707z"
            fill={color === 'default' ? '#1a335f' : color}
          />
          <path
            d="M524.068 103.185h-44.484v-.946h1.133a5.048 5.048 0 005.12-4.943v-44.9a5.105 5.105 0 00-5.187-5.024h-1.069v-.946h26.223v.946h-1.07a5.158 5.158 0 00-5.247 5.024v46.986h11.39c7.993-.078 13.443-5.223 15.92-13.59h.978zM581.296 46.43v.945h-.722a8.278 8.278 0 00-7.209 4.836l-19.243 40.651c-.653 1.425-4.146 8.805-4.405 11.552h-.838l-25.162-52.023c-1.858-3.61-4.695-5.017-7.183-5.017h-.662v-.946h27.724v.874h-.722c-2.145 0-4.54 1.944-3.238 5.377l13.252 30.773 13.526-30.773c1.422-3.433-1.018-5.377-3.163-5.377h-.781v-.874zM622.152 96.96c1.83 3.799 4.84 5.28 7.43 5.28h.708v.946h-27.798v-.938h.743c2.183 0 4.634-1.847 3.223-5.259l-3.67-8.646h-20.034l-3.778 8.773c-1.299 3.33 1.13 5.132 3.286 5.132h.744v.938h-18.893v-.946h.756a8.328 8.328 0 007.233-4.934l19.51-42.018c.653-1.459 4.125-8.797 4.415-11.467h.803zm-20.947-12.338l-8.365-19.707-8.485 19.707z"
            fill={color === 'default' ? '#1a335f' : color}
          />
          <path
            d="M657.886 46.433c10.484 0 20.647 3.7 20.647 15.493 0 6.655-3.821 13.94-13.135 15.282 3.746 1.14 7.357 5.14 9.13 8.05a104.147 104.147 0 006.869 10.54c3.694 5.027 5.825 6.424 9.724 6.44v.948h-7.93c-10.273 0-15.112-1.984-19.608-9.07-2.086-3.377-5.475-9.723-6.34-12.902-1.581-3.96-3.922-5.656-5.665-5.796v-.793h2.42c3.92-.053 8.245-1.513 9.828-9.46a14.643 14.643 0 00.318-3.957c-.423-9.33-6.777-10.679-10.054-10.83-2.439-.114-4.33.002-5.408-.04v46.885a5.047 5.047 0 005.14 5.017h1.03v.946H628.81v-.946h1.133a5.009 5.009 0 005.035-4.931V52.292A4.917 4.917 0 00630 47.378h-1.19v-.95z"
            fill={color === 'default' ? '#1a335f' : color}
          />
          <path
            d="M687.682 103.184v-.946h1.12a5.25 5.25 0 005.454-5.022v-44.82a5.252 5.252 0 00-5.455-5.024h-1.12v-.946h26.82v.946h-1.093a5.309 5.309 0 00-5.51 4.956v44.914a5.307 5.307 0 005.512 4.997h1.12v.946zM793.355 70.08c0 21.255-14.496 34.429-37.214 34.429s-37.214-13.174-37.214-34.43 14.496-34.43 37.214-34.43 37.214 13.175 37.214 34.43zm-15.522 0c0-18.786-8.357-30.452-21.692-30.452s-21.693 11.666-21.693 30.452c0 18.785 8.358 30.45 21.693 30.45s21.692-11.665 21.692-30.45zM107.259 28.652h-8.955l.007-.41h.518a2.623 2.623 0 002.622-2.573V2.966A2.622 2.622 0 0098.83.409h-.518L98.305 0h8.953l-.006.41h-.518a2.622 2.622 0 00-2.62 2.547V25.67a2.622 2.622 0 002.62 2.574h.518zM134.969 23.952a14.843 14.843 0 01-11.657 5.271c-8.088-.04-13.424-4.92-13.424-12.85 0-7.968 5.347-12.851 13.412-12.851a17.557 17.557 0 019.554 2.477l.9 5.78h-.358c-1.19-4.781-4.41-7.031-10.134-7.031-6.251 0-10.415 4.418-10.415 11.626 0 7.177 4.186 11.623 10.465 11.623a12.335 12.335 0 008.994-3.547l.068-5.438c.013-1.031-.709-1.61-1.905-1.608h-.583v-.41h7.507v.41h-.559c-1.197 0-1.87.575-1.866 1.623zM157.707 22.782l-2.256 5.87h-16.626l.008-.41h.562a2.288 2.288 0 002.361-2.172V6.723a2.363 2.363 0 00-2.445-2.218h-.482l-.006-.41h8.479l-.007.41h-.482a2.363 2.363 0 00-2.443 2.213V27.4h6.403c3.929-.054 5.329-1.971 6.49-4.619zM175.383 28.654h-16.627l.008-.409h.562a2.29 2.29 0 002.362-2.173V6.65a2.223 2.223 0 00-2.364-2.143h-.562l-.007-.41h11.956a17.783 17.783 0 004.572-.64v4.63l-.445-.005v-.629a2.032 2.032 0 00-2.052-2.104H164.3V15.76h6.992a1.592 1.592 0 001.658-1.737v-.52l.446-.005v5.75l-.446-.006v-.52a1.586 1.586 0 00-1.563-1.734H164.3V27.4h6.4c3.931-.052 5.331-1.97 6.494-4.619h.443zM192.662 18.24a5.85 5.85 0 011.853 4.396c.032 3.651-3.206 6.589-7.244 6.589-2.426 0-5.57-.591-7.06-1.928a11.25 11.25 0 01.406-5.081h.472c-.362 3.686 2.12 5.884 5.732 5.781 3.383-.096 5.453-1.86 5.453-4.52a4.04 4.04 0 00-1.49-3.238l-8.188-6.318a5.717 5.717 0 01-1.955-4.423c-.049-3.325 2.978-5.975 6.766-5.975a17.876 17.876 0 014.049.379h1.368l.061 4.452h-.468c0-2.267-1.518-3.619-4.73-3.619-2.733 0-4.934 1.728-4.918 3.904a3.93 3.93 0 001.609 3.223zM197.962 28.652l.007-.41h.546a2.575 2.575 0 002.782-2.216V6.722a2.576 2.576 0 00-2.784-2.218h-.546l-.008-.41h9.272v.41h-.552a2.593 2.593 0 00-2.775 2.146v19.408a2.582 2.582 0 002.778 2.185h.546l.007.409zM232.31 25.858a3.696 3.696 0 003.16 2.385h.309v.409h-8.407v-.406h.325a1.683 1.683 0 001.446-2.456l-2.235-5.446h-10.354l-2.252 5.333c-.626 1.638.45 2.57 1.405 2.57h.326v.405h-7.798v-.41h.324a3.765 3.765 0 003.209-2.363l8.473-18.14a23.054 23.054 0 001.575-4.216h.388zm-5.906-6.742l-4.598-11.2-4.733 11.2zM254.36 4.1c2.94 0 8.514.684 8.514 6.124 0 2.527-2.257 4.533-4.5 5.07 3.966.484 6.879 3.198 6.879 6.488 0 5.338-5.08 6.871-9.112 6.871H246.01l.007-.409h.482a2.354 2.354 0 002.452-2.208V6.703a2.275 2.275 0 00-2.451-2.197h-.483l-.007-.408zm1.753 23.325c3.526 0 6.207-1.742 6.207-5.643 0-5.228-5.09-6.103-9.499-6.103l-.009-.41c2.979 0 7.187-.55 7.187-5.048 0-3.427-2.106-4.896-5.692-4.896h-2.784v22.1zM289.935 25.858a3.696 3.696 0 003.16 2.385h.309v.409h-8.407v-.406h.325a1.683 1.683 0 001.447-2.456l-2.236-5.446H274.18l-2.253 5.333c-.626 1.638.45 2.57 1.406 2.57h.325v.405h-7.798v-.41h.324a3.765 3.765 0 003.21-2.363l8.472-18.14a23.055 23.055 0 001.576-4.216h.388zm-5.906-6.742l-4.598-11.2-4.732 11.2zM317.765 4.096v.41h-.608a1.881 1.881 0 00-1.967 1.724v13.775c0 5.717-3.885 9.22-10.202 9.22-6.32 0-10.237-3.48-10.237-9.158V6.277a1.875 1.875 0 00-1.968-1.772h-.607v-.41h7.768v.41h-.607a1.882 1.882 0 00-1.973 1.773v13.27c0 5.311 2.885 8.566 7.585 8.566 5.162 0 8.332-3.082 8.345-8.11V6.25a1.876 1.876 0 00-1.967-1.745h-.608v-.41zM336.662 4.054a17.2 17.2 0 004.571-.642V8.02l-.436-.005v-.629a2.029 2.029 0 00-2.047-2.104h-7.406v20.793a2.342 2.342 0 002.4 2.168h.474l.006.41h-8.434l.006-.41h.475a2.338 2.338 0 002.402-2.218V5.283h-7.411a2.026 2.026 0 00-2.047 2.103v.63l-.437.004V3.412a17.17 17.17 0 004.555.642zM343.048 28.652l.007-.41h.546a2.575 2.575 0 002.782-2.216V6.722a2.576 2.576 0 00-2.784-2.218h-.546l-.007-.41h9.271v.41h-.551a2.593 2.593 0 00-2.776 2.145v19.41a2.582 2.582 0 002.778 2.184h.546l.007.409zM368.361 18.24a5.849 5.849 0 011.853 4.396c.032 3.651-3.205 6.589-7.244 6.589-2.425 0-5.569-.591-7.06-1.928a11.25 11.25 0 01.407-5.081h.472c-.362 3.686 2.12 5.884 5.731 5.781 3.383-.096 5.454-1.86 5.454-4.52a4.04 4.04 0 00-1.491-3.238l-8.187-6.318a5.717 5.717 0 01-1.956-4.423c-.049-3.325 2.978-5.975 6.767-5.975a17.876 17.876 0 014.048.379h1.368l.062 4.452h-.47c0-2.268-1.517-3.619-4.728-3.619-2.734 0-4.934 1.728-4.919 3.904a3.93 3.93 0 001.609 3.223zM389.907 4.054a17.2 17.2 0 004.572-.642V8.02l-.436-.005v-.629a2.029 2.029 0 00-2.048-2.104h-7.406v20.793a2.342 2.342 0 002.4 2.168h.475l.006.41h-8.434l.006-.41h.475a2.338 2.338 0 002.401-2.218V5.283h-7.41a2.026 2.026 0 00-2.047 2.103v.63l-.437.004V3.412a17.17 17.17 0 004.555.642zM415.049 25.858a3.696 3.696 0 003.159 2.385h.31v.409h-8.407v-.406h.325a1.683 1.683 0 001.446-2.456l-2.236-5.446h-10.353l-2.253 5.333c-.625 1.638.451 2.57 1.406 2.57h.326v.405h-7.798v-.41h.324a3.765 3.765 0 003.209-2.363l8.473-18.14a23.055 23.055 0 001.575-4.216h.388zm-5.906-6.742l-4.598-11.2-4.733 11.2zM440.824 4.097a18.246 18.246 0 004.63-.641v4.63l-.45-.005v-.628a2.034 2.034 0 00-2.056-2.104h-8.617v10.412h7.098a1.593 1.593 0 001.664-1.738v-.52l.452-.004v5.749l-.452-.005v-.52a1.586 1.586 0 00-1.567-1.734h-7.195v9.052a2.305 2.305 0 002.392 2.203h.569l.008.41h-8.55l.008-.41h.57a2.308 2.308 0 002.392-2.172V6.648a2.262 2.262 0 00-2.394-2.142h-.57l-.007-.41h5.582zM474.106 4.096v.41h-.608a1.881 1.881 0 00-1.967 1.724v13.775c0 5.717-3.885 9.22-10.202 9.22-6.32 0-10.237-3.48-10.237-9.158V6.277a1.874 1.874 0 00-1.968-1.772h-.607v-.41h7.767v.41h-.606a1.882 1.882 0 00-1.973 1.773v13.27c0 5.311 2.885 8.566 7.585 8.566 5.162 0 8.332-3.082 8.345-8.11V6.25a1.876 1.876 0 00-1.967-1.745h-.608v-.41zM504.958 4.096l-.006.41h-.68a2.238 2.238 0 00-2.275 2.047v17.452a40.114 40.114 0 00.388 5.22h-.39L480.71 9.03v17.077a2.233 2.233 0 002.279 2.139h.68l.006.409h-7.736l.005-.41h.682a2.234 2.234 0 002.279-2.138V8.596a34.28 34.28 0 00-.392-5.112l.439.02 21.238 20.017V6.549a2.24 2.24 0 00-2.276-2.044h-.68l-.006-.41zM521.266 4.101c8.072 0 13.158 4.67 13.158 12.29 0 7.602-5.086 12.262-13.158 12.262h-13.651l.007-.409h.545a2.274 2.274 0 002.296-2.221V6.71a2.26 2.26 0 00-2.34-2.208h-.5l-.007-.406zm-8.139 23.31h8.16c6.284 0 10.178-4.187 10.178-11.02 0-6.857-3.895-11.06-10.179-11.06h-8.159zM558.703 25.858a3.696 3.696 0 003.159 2.385h.31v.409h-8.407v-.406h.325a1.683 1.683 0 001.446-2.456l-2.236-5.446h-10.353l-2.253 5.333c-.625 1.638.45 2.57 1.406 2.57h.326v.405h-7.799v-.41h.325a3.765 3.765 0 003.209-2.363l8.473-18.14a23.048 23.048 0 001.575-4.216h.388zm-5.907-6.742l-4.597-11.2-4.733 11.2z"
            fill={color === 'default' ? '#1a335f' : color}
          />
          <path
            d="M593.175 26a2.705 2.705 0 002.792 2.243h.613v.409h-8.503v-.387h.599a1.47 1.47 0 001.5-1.584l-2.153-16.845-7.709 15.21a20.633 20.633 0 00-1.455 4.179h-.401L568.6 10.208l-1.837 16.473a1.501 1.501 0 001.5 1.584h.599v.387h-7.592v-.41h.613a2.702 2.702 0 002.803-2.321l3.167-22.398h.402l10.806 20.786 10.445-20.773h.39zM614.733 28.654h-16.626l.007-.409h.562a2.29 2.29 0 002.363-2.173V6.65a2.223 2.223 0 00-2.364-2.143h-.562l-.007-.41h11.956a17.781 17.781 0 004.572-.64v4.63l-.445-.005v-.629a2.032 2.032 0 00-2.053-2.104h-8.486V15.76h6.992a1.592 1.592 0 001.659-1.737v-.52l.445-.005v5.75l-.445-.006v-.52a1.586 1.586 0 00-1.563-1.734h-7.088V27.4h6.4c3.932-.052 5.332-1.97 6.494-4.619h.444zM647.629 4.096l-.006.41h-.68a2.238 2.238 0 00-2.275 2.047v17.452a40.114 40.114 0 00.388 5.22h-.39L623.382 9.03v17.077a2.233 2.233 0 002.279 2.139h.681l.005.409h-7.736l.006-.41h.68a2.234 2.234 0 002.28-2.138V8.596a34.28 34.28 0 00-.392-5.112l.439.02 21.238 20.017V6.549a2.24 2.24 0 00-2.276-2.044h-.68l-.006-.41zM666.532 4.054a17.198 17.198 0 004.572-.642V8.02l-.436-.005v-.629a2.029 2.029 0 00-2.047-2.104h-7.407v20.793a2.342 2.342 0 002.4 2.168h.475l.006.41h-8.434l.006-.41h.475a2.338 2.338 0 002.402-2.218V5.283h-7.412a2.026 2.026 0 00-2.046 2.103v.63l-.437.004V3.412a17.167 17.167 0 004.555.642zM691.674 25.858a3.696 3.696 0 003.16 2.385h.309v.409h-8.407v-.406h.325a1.683 1.683 0 001.446-2.456l-2.235-5.446h-10.354l-2.252 5.333c-.626 1.638.45 2.57 1.405 2.57h.326v.405h-7.799v-.41h.325a3.765 3.765 0 003.209-2.363l8.473-18.14a23.048 23.048 0 001.575-4.216h.388zm-5.906-6.742l-4.598-11.2-4.733 11.2zM715.05 22.782l-2.256 5.87h-16.626l.008-.41h.562a2.288 2.288 0 002.361-2.172V6.723a2.363 2.363 0 00-2.445-2.218h-.482l-.006-.41h8.479l-.007.41h-.481a2.362 2.362 0 00-2.444 2.213V27.4h6.403c3.929-.054 5.329-1.971 6.49-4.619z"
            fill={color === 'default' ? '#1a335f' : color}
          />
        </symbol>
      </defs>
      <use
        width={793.355}
        height={105.075}
        transform="translate(0 577.513) scale(1.22552)"
        xlinkHref="#prefix__a"
      />
      <path
        d="M224.436 322.516c5.826-1.837 12.092-1.133 18.072-2.277 23.12-.718 46.35-1.231 69.386 1.061 24.541 2.709 49.047 7.15 72.334 15.517 35.32 12.318 68.444 34.283 88.617 66.355 2.255 4.154 5.896 8.01 5.8 12.999-2.256-4.595-6.35-7.795-9.668-11.579-14.634-15.099-32.515-26.713-51.338-35.917-33.363-16.16-70.127-24.517-106.975-27.202q-25.066-.787-50.143.108c-10.839 1.3-21.737 2.077-32.504 3.927-8.2 1.002-16.174 3.593-24.493 3.616 6.982-8.869 13.584-18.025 20.912-26.608zM644.991 323.293a350.543 350.543 0 0158.345-3.627c14.861.178 29.888.023 44.499 2.827 7.268 8.631 13.966 17.715 20.9 26.608-7.985 0-15.636-2.437-23.49-3.44-11.113-1.932-22.346-2.828-33.53-4.092-17.08-.563-34.198-.646-51.279-.05-28.91 2.352-57.735 7.832-84.891 18.217-20.375 7.698-39.999 17.834-57.176 31.32-9.907 7.592-18.513 16.71-26.498 26.247 14.849-32.717 43.842-57.15 75.916-72.214 24.337-11.386 50.646-18.142 77.204-21.796z"
        fill={color === 'default' ? '#2abec0' : color}
      />
      <path
        d="M151.111 376.148A511.607 511.607 0 01266.5 359.615c39.653-.654 80.046 3.523 117.24 18.024 38.1 14.432 71.832 41.993 90.417 78.59a171.253 171.253 0 00-44.678-38.65c-38.328-23.062-82.922-33.888-127.253-36.694-28.97-1.073-58.095-.404-86.754 4.31a531.499 531.499 0 00-74.172 16.77 51.172 51.172 0 01-9.419 2.27c6.577-9.24 13.87-18.072 19.23-28.087zM570.257 385.793c33.363-16.94 70.878-24.028 108.012-25.796 31.5-1.527 63.073 1.087 94.227 5.85a491.212 491.212 0 0148.711 10.336c5.217 10.29 13.083 18.919 19.302 28.612-48.223-14.884-98.416-25.054-149.062-24.29a316.365 316.365 0 00-88.52 11.446c-23.228 6.626-45.776 16.09-66.02 29.364a163.833 163.833 0 00-38.542 34.735c15.254-30.544 41.598-54.896 71.892-70.257z"
        fill={color === 'default' ? '#1596d0' : color}
      />
      <path
        d="M839.78 428.012c-22.619-6.22-45.513-11.89-68.753-15.136-5.67-1.552-11.554-1.98-17.331-2.9-41.993-5.635-84.88-7.378-126.848-.621-22.93 4.106-46.027 10.11-66.367 21.747-13.417 6.231-25.233 15.755-36.024 25.833-4.942 4.356-6.027 11.135-9.107 16.672-3.355 6.362-7.329 13.382-14.587 15.83-8.797 2.852-18.465 2.721-27.43.644-11.172-3.092-15.851-14.874-19.993-24.53-2.029-6.47-7.651-10.588-12.485-14.909-19.015-16.7-42.374-27.811-66.582-34.746-33.05-9.465-67.762-11.71-101.983-10.624-47.257 1.886-94.179 9.896-139.68 22.692-3.283.99-6.756 2.615-8.415 5.789-2.936 4.954-1.827 12.102 2.972 15.516 2.805 2.377 6.768 2.758 10.254 1.958a610.51 610.51 0 01114.791-20.829c37.027-3.02 74.805-2.22 110.985 7.007 23.348 6.1 46.11 16.354 64.087 32.767 5.49 3.902 6.469 11.064 9.882 16.507 6.434 13.786 19.147 24.768 34.425 27.13 14.873 2.222 31.19 2.054 44.583-5.67 9.74-5.657 16.233-15.327 20.876-25.34 2.16-3.843 3.044-8.605 6.636-11.482 18.538-17.32 42.28-28.075 66.665-34.268 30.927-7.664 63.084-9.289 94.788-7.7 23.837 1.242 47.482 4.63 71.069 8.14l.632.418a580.946 580.946 0 0158.011 13.308c7.114 2.258 15.159-3.723 14.824-11.208.346-5.908-4.332-10.813-9.895-11.995zM497.993 3.99c6.118-5.183 14.666-4.36 21.958-2.823 13.27 3.06 24.444 12.641 31.052 24.376-2.947 2.96-6.341 5.825-10.673 6.286-10.643 1.618-22.027 1.453-31.568 7.165a125.17 125.17 0 0132.406-.685c-3.576 3.158-7.89 6.092-9.497 10.799-1.327 3.952-2.123 8.073-3.632 11.985q-3.75-1.341-7.515-2.557c-2.697 4.624-.21 9.722-.657 14.68-2.319-.096-4.708-.126-6.859-1.088-8.59-3.59-16.078-9.443-22.517-16.107 3.423 9.417 8.255 18.719 16.037 25.256 4.971 4.148 11.607 6.747 18.13 5.84 2.878-.296 4.708-3.23 4.54-5.952-.181-5.38-3.45-9.904-5.84-14.498 20.046.502 36.222 14.443 47.871 29.529 19.905 25.923 33.091 56.279 44.071 86.87 3.085 9.19 6.48 18.312 8.717 27.77-12.742.85-25.16-3.202-36.39-8.9-1.214 4.849-2.081 9.988-4.874 14.233-7.362 6.483-15.659 12.14-25.06 15.225.392-5.797 6.315-8.646 9.205-13.158 3.018-3.267 3.702-7.693 4.163-11.942-2.849 1.9-6.481 6.119-9.68 2.236 4.582-4.525 7.572-10.267 11.58-15.255q-2.766-1.257-5.49-2.514c-.782-3.882-1.606-7.768-2.402-11.649-19.193-4.777-40.397-1.272-57.299 8.926 12.823-2.961 26.093-5.558 39.28-3.674a31.07 31.07 0 0114.107 5.364c-12.43 14.151-34.892 16.217-51.375 8.689a316.142 316.142 0 01-56.446-90.92c-7.782 6.201-14.445 13.66-20.898 21.188-15.03 17.936-28.454 37.13-41.346 56.627-13.493-8.057-24.529-19.429-34.279-31.608-1.41 8.868-.74 18.017.517 26.89-4.582 1.508-5.7-3.367-6.566-6.636-1.326 1.8-2.71 3.56-4.05 5.365 1.104 2.75 1.9 5.697 3.645 8.142 1.174 1.913 3.241 3.954 1.914 6.354-2.459.364-3.939-2.346-5.769-3.616 1.286 3.995 4.092 8.716.852 12.572-4.442-6.803-9.456-13.649-11.454-21.637-.81-6.553-3.562-13.592-.74-19.989 3.505-7.39 6.285-15.574 12.977-20.787-.894-1.438-1.79-2.862-2.668-4.303a259.663 259.663 0 0192.653-68.556c3.883-1.088 5.182-5.085 7.515-7.877 7.585-3.759 17.138-2.949 23.9-8.398 6.41-5.613 1.382-15.251 6.564-21.51 3.297-5.616 10.45-7.136 14.067-12.375 1.83-4.832 3.31-10.24 7.823-13.354zm42.337 101.788c4.08 20.477 8.522 41.067 8.228 62.061 4.93.56 9.862 1.16 14.765 1.996-5.391-22.069-12.753-43.762-22.993-64.057z"
        fill={color === 'default' ? '#1a335f' : color}
      />
      <path
        d="M367.317 206.225c4.303 1.466 8.186 4.637 9.136 9.275.978 3.283 1.605 8.648-2.627 9.86-3.338-.208-6.816-2.512-7.585-5.908-.754-4.427.293-8.884 1.076-13.227zM385.253 234.664c4.455 1.257 9.023 2.586 12.836 5.31 4.429 3.338 1.69 13.254-4.58 11.27-6.873-2.122-8.927-10.183-8.256-16.58zM359.3 255.115c1.676-6.062 8.101-9.375 14.094-9.01-.782 5.74-1.356 12.167-5.476 16.61-4.302 2.722-10.309-3.019-8.619-7.6zM386.51 268.97c5.392.252 11.356.923 15.505 4.736 3.241 3.226.628 10.28-4.372 9.249-6.873-.925-9.205-8.397-11.133-13.985z"
        fill={color === 'default' ? '#1596d0' : color}
      />
      <path
        d="M480.007 385.965c2.086 3.845 5.352 7.434 5.755 11.9 15.137-31.597 43.526-55.262 74.863-69.982 7.951-3.719 18.253-5.466 26.566-8.252 0-21.213-7.907-32.922-8.921-35.322-7.167-17.545-18.663-32.813-30.173-47.702-10.978 1.704-22.657.417-32.323-5.324-8.773-5.002-14.752-13.492-19.5-22.168 3.94 1.148 7.864 2.334 11.804 3.493-20.8-22.362-38.316-47.886-50.357-76.016.993 11.398 3.842 22.545 5.044 33.914-5.016 20.06-6.483 43.164 5.055 61.337 17.321 23.172 34.474 47.492 42.423 75.693-10-16.287-20.212-32.812-34.14-46.094-4.05 14.052-7.43 28.58-14.931 41.317-4.89 8.342-12.013 15.815-21.26 19.194-1.466.548-11.714 4.12-23.654 8.192 25.584 12.901 48.411 31.436 63.749 55.82z"
        fill={color === 'default' ? '#1a335f' : color}
      />
    </svg>
  );
}

const SVG = React.memo(Logo);
export { SVG as MonteCalvarioLogo };
