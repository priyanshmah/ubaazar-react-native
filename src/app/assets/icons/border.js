import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Border({size = 24, ...props}) {
  return (
    <Svg 
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg" width={size} height={size} {...props}>
      <Path
        d="M323 37l2.346.713C351.059 45.68 374.898 58.343 396 75l2.656 2.07C424.528 97.691 444.594 122.824 460 152l1.006 1.877C471.574 173.866 478.546 196.715 482 219l.637 3.637c8.956 56.724-5.807 117.856-38.946 164.62A338.203 338.203 0 01437 396l-2.07 2.656c-38.228 47.961-92.973 77.332-153.636 84.98-30.936 3.416-62.546.55-92.294-8.636l-2.346-.713C160.941 466.32 137.102 453.657 116 437l-2.656-2.07c-48.126-38.359-77.925-93.814-85.14-154.81C25.26 249.447 27.894 218.483 37 189l.713-2.346c9.645-31.123 26.072-59.376 48.115-83.295a253.59 253.59 0 004.344-4.843c36.563-41.75 93.456-66.989 148.394-70.868 28.593-1.69 56.99.877 84.434 9.352zm-84 10l-1.414 1.645c-3.833 5.085-4.399 9.81-4.129 16.097 1.03 6.175 3.755 10.985 8.617 14.95C248.232 83.686 253.708 84.778 261 84c7.1-2.26 12.764-7.186 16.262-13.793 1.98-5.919 1.829-12.266-.332-18.094-3.45-6.307-7.98-10.62-14.938-12.718-9.122-1.807-17.035.36-22.992 7.605zm45-6l.813 1.938L286 46l.8 1.879c3.716 9.56 3.18 18.992-.437 28.488-1.804 3.485-4.027 6.48-6.363 9.633l1.857.38C294.47 88.98 306.807 91.84 319 96l-.105-2.457C318.614 82.053 319.899 72.591 328 64c3.457-3.292 7.183-6.142 11-9-26.84-10.076-26.84-10.076-55-14zm-97 9.063l-2.98.994A111.58 111.58 0 00168 58a100.89 100.89 0 007.375 5.125C183.046 68.656 186.476 76.905 188 86c.073 2.117.097 4.237.07 6.355l-.03 3.22L188 98l1.993-.67C203.877 92.687 217.588 88.61 232 86l-1.46-2.16C224.2 74.23 221.857 66.576 223 55c1.036-3.818 2.428-7.376 4-11l1-3c-13.709 0-28.112 4.757-41 9.063zm147.305 23.011C330.329 79.22 329.115 84.721 330 92c2.312 7.38 6.242 12.277 13 16 6.64 2.776 12.64 2.292 19.25-.25 5.544-3.528 10.035-8.463 12.5-14.625.865-7.351.314-12.808-3.75-19.125-4.502-4.944-9.022-8.415-15.762-9.406-8.595-.276-15.322 1.614-20.933 8.48zm-197.18 2.739c-4.173 5.172-5.381 9.651-4.938 16.25 1.036 7.616 4.05 11.521 9.778 16.421 4.333 3.228 8.607 4.581 14.035 4.516 6.433-1.102 11.524-3.108 16-8 4.25-6.336 6.443-12.38 5-20-2.382-7.385-6.255-12.176-13-16-10.372-3.457-19.556-.928-26.875 6.813zM386 83l-.262 3.184c-1.158 12.257-3.657 19.913-13.379 28.086-3.298 2.419-6.614 4.096-10.359 5.73a209.56 209.56 0 008.523 8.234c12.503 11.397 12.503 11.397 17.278 18.29L389 148h2l.996-2.344c4.072-8.915 8.73-14.554 17.192-19.531 5.833-1.721 11.782-2.414 17.812-3.125-5.366-7.601-11.612-14.263-18-21l-1.945-2.074C400.818 93.463 393.81 87.456 386 83zm-285.813 21.563C95.091 109.757 90.496 115.284 86 121l-2.254 2.695C81.8 125.784 81.8 125.784 82 128l2.71.262c10.447 1.214 19.318 3.371 26.29 11.738 2.994 3.799 5.455 7.365 7 12 3.707-2.777 6.522-5.671 9.375-9.313 5.636-7.016 11.734-12.921 18.625-18.687-2.461-2.05-4.834-3.374-7.75-4.625-7.72-3.803-12.727-10.758-15.574-18.734-1.151-4.499-1.5-9.012-1.676-13.641-5.658 0-16.732 13.558-20.813 17.563zM136 149c-17.024 19.754-29.47 42.724-36 68l-.637 2.428c-9.977 39.845-2.198 83.1 18.261 118.292A164.618 164.618 0 00217 412l2.437.642c39.842 9.972 83.094 2.191 118.283-18.266C374.584 372.131 401.036 336.573 412 295a191.07 191.07 0 003-15l.555-3.45c4.901-41.23-5.52-84.066-31.27-116.938C360.993 130.408 331.395 109.517 295 100l-2.437-.642C236.175 85.245 174.57 106.191 136 149zm268.41-4.004c-3.625 5.151-4.345 10.871-3.41 17.004 2.373 7.319 6.185 12.371 13 16 5.514 2.302 10.209 2.214 16 1 7.418-3.055 11.475-6.95 15-14 2.1-5.424 1.56-11.244-.5-16.563-2.773-5.703-7.225-9.858-12.922-12.605-11.197-3.614-20.106.43-27.168 9.164zM68.687 147.25c-4.098 5.274-6.032 10.083-5.624 16.813 1.055 7.256 4.232 12.113 9.964 16.64 5.364 3.527 10.15 4.716 16.535 3.86 6.578-1.537 11.122-4.287 15.04-9.829 3.27-5.809 4.65-11.128 3.398-17.734-2.382-7.385-6.255-12.176-13-16-9.815-3.272-19.301-1.241-26.313 6.25zM454 171c-1.081 1.563-1.081 1.563-2.125 3.563-4.269 7.03-10.126 11.94-17.867 14.792-6.249 1.34-12.657.929-19.008.645l.58 1.857c3.824 12.308 7.487 24.59 10.42 37.143l1.617-1.207c8.856-6.297 17.479-8.974 28.383-7.793 5.21 1.158 10.058 3.015 15 5-3.234-18.641-7.89-36.442-15-54h-2zm-400 5c-4.385 12.2-8.367 24.355-11 37.063l-.628 3.003c-.998 5.071-1.601 9.768-1.372 14.934l2.316-1.094c10.266-4.447 20.5-6.188 31.309-2.156 3.542 1.647 6.427 3.67 9.375 6.25h2l.396-2.104c.61-3.217 1.232-6.432 1.854-9.646l.621-3.309c1.316-6.736 3.043-13.12 5.35-19.587.884-2.257.884-2.257.779-4.354l-3.113.14c-11.152.357-19.93-.517-28.825-7.952-3.578-3.419-5.93-6.738-8.062-11.188h-1zm377.41 64.996c-3.625 5.151-4.345 10.871-3.41 17.004 2.39 7.368 6.217 12.264 13 16 6.63 2.772 12.68 2.341 19.25-.313 6.364-3.905 9.852-7.627 12.5-14.687.921-7.368-.033-13.082-4.262-19.18-4.27-5.24-8.164-8.308-15.093-9.129-9.898-.45-15.807 2.664-21.985 10.305zM44 244c-3.678 6.023-5.858 11.85-5 19 1.922 7.137 5.908 11.904 12 16 5.785 2.79 12.05 3.085 18.246 1.383 6.453-2.843 11.123-8.05 14.192-14.32 1.383-7.533.933-12.944-2.82-19.762C76.492 240.433 71.014 237.324 64 236c-7.51-.988-14.936 2.7-20 8zm382 34l-.396 2.104c-.61 3.217-1.232 6.432-1.854 9.646l-.621 3.309c-1.316 6.736-3.043 13.12-5.35 19.587-.884 2.257-.884 2.257-.779 4.354l3.113-.14c11.152-.357 19.93.517 28.825 7.952 3.578 3.419 5.93 6.738 8.062 11.188 6.916-10.373 9.423-24.85 11.938-36.875.21-1.003.422-2.006.64-3.04 1.019-5.124 1.662-9.862 1.422-15.085l-2.316 1.094c-10.266 4.447-20.5 6.188-31.309 2.156-3.542-1.647-6.427-3.67-9.375-6.25h-2zm-344.438 7.813C73.939 291.551 65.394 293.017 56 292c-5.21-1.158-10.058-3.015-15-5 3.234 18.641 7.89 36.442 15 54h2c1.332-1.685 1.332-1.685 2.563-3.813l1.316-2.144C63.13 332.906 63.13 332.906 64 330c1.746-1.027 1.746-1.027 4-2l2.473-1.254 2.59-1.308 2.597-1.317c4.58-2.194 8.553-2.24 13.528-2.183l2.271.013c1.847.012 3.694.03 5.541.049l-.58-1.857C92.597 307.835 88.934 295.553 86 283c-1.805 0-3.1 1.707-4.438 2.813zm327.91 48.398c-4.413 5.362-6.247 11.326-5.913 18.238 1.164 6.732 4.168 11.94 9.566 16.113 5.949 4.086 11.845 4.063 18.875 3.438 6.197-1.706 10.593-5.635 14-11 3-5.989 3.727-11.508 2-18-2.127-5.621-5.977-9.769-11-13-9.738-4.31-19.588-3.41-27.527 4.21zM71 340c-4.147 5.915-5.479 10.821-5 18 1.443 6.607 5.035 11.5 10 16 5.712 3.515 11.464 3.82 18 3 6.7-1.86 11.08-6.428 15-12 2.748-5.616 3.085-11.656 1.16-17.59-2.758-6.177-6.206-10.166-12.16-13.41-10.111-3.77-19.45-1.726-27 6zm322 20a6467.982 6467.982 0 00-4.563 5l-1.39 1.523a305.112 305.112 0 00-7.547 8.602c-4.09 4.727-8.79 8.78-13.5 12.875 2.17 2.17 3.83 2.855 6.625 4.063 8.306 4.105 13.6 10.612 16.7 19.296 1.15 4.499 1.499 9.012 1.675 13.641 4.38-2.781 8.265-5.83 12.063-9.375l1.682-1.564C413.7 405.622 423.32 396.395 430 386v-2l-2.71-.262c-10.376-1.205-19.422-3.344-26.29-11.738-2.08-2.951-4.057-5.957-6-9l-2-3zm-272 4l-.996 2.344c-3.92 8.582-8.153 14.98-16.934 18.996-5.981 2.138-11.745 3.238-18.07 3.66 5.366 7.601 11.612 14.263 18 21l1.945 2.074c6.237 6.463 13.244 12.47 21.055 16.926l.008-2.422c.383-10.892 3.278-19.507 11.367-27.078 3.952-3.22 7.962-5.465 12.625-7.5a209.56 209.56 0 00-8.523-8.234c-12.503-11.397-12.503-11.397-17.278-18.29L123 364h-2zm221.688 40.063c-4.736 5.176-7.91 10.825-8.313 17.937.392 6.56 2.87 12.358 7.633 16.926 6.728 5.201 12.593 5.821 20.992 5.074 6.984-1.923 11.558-6.714 15.07-12.879 2.903-6.473 2.063-12.722-.132-19.308-4.336-6.294-10.07-10.946-17.563-12.625-6.524-.67-12.211 1.465-17.688 4.875zm-198.063 3.187c-5.47 5.73-8.058 11.563-7.895 19.54.897 7.35 4.644 12.15 10.172 16.8 5.745 3.861 11.356 4.176 18.098 3.41 6.85-2.137 11.74-6.5 15.313-12.688 2.602-5.684 2.74-11.022.84-16.96-2.724-6.15-6.237-10.135-12.153-13.352-8.292-3.04-17.214-2.286-24.375 3.25zm173.695 8.36C305.652 420 293.2 423.633 280 426l1.46 2.16c6.339 9.61 8.682 17.264 7.54 28.84-1.036 3.818-2.428 7.376-4 11l-1 3c7.431-.539 14.512-1.816 21.75-3.563l3.256-.784c7.6-1.9 15.001-4.18 22.369-6.84l2.808-1.009c5.462-2.034 5.462-2.034 9.817-5.804l-1.941-.96c-8.789-4.742-14.006-10.82-16.997-20.415-1.375-5.862-1.344-11.637-1.062-17.625-1.953 0-3.863.97-5.68 1.61zM193 416l.105 2.492c.26 10.726-1.203 19.978-8.105 28.508-3.728 3.699-7.801 6.86-12 10 26.84 10.076 26.84 10.076 55 14l-.813-1.938L226 466l-.8-1.879c-3.716-9.56-3.18-18.992.437-28.488 1.804-3.485 4.027-6.48 6.363-9.633l-1.857-.38c-12.612-2.6-24.95-5.461-37.143-9.62zm46.074 19.266c-4.948 7.322-6.107 12.824-5.074 21.734 2.367 6.498 6.082 10.781 12.07 14.16 5.883 2.56 12.068 2.677 18.118.652 3.8-1.603 6.167-3.595 8.812-6.812l1.414-1.645c3.833-5.085 4.399-9.81 4.129-16.097-1.03-6.175-3.755-10.985-8.617-14.95-9.94-6.448-22.697-6.636-30.852 2.958z"
        fill="#313132"
      />
      <Path
        d="M255.563 1.688l2.793.006C272.75 1.748 286.832 2.259 301 5l3.133.602C352.978 15.32 397.203 38.456 433 73l1.783 1.717C442.39 82.08 449.567 89.567 456 98l1.267 1.642c24.12 31.38 40.57 67.276 48.483 106.046l.603 2.946c3.032 15.66 4.027 31.009 3.96 46.929l-.007 2.792C510.06 324.181 484.246 385.424 439 433l-1.63 1.717c-7.734 8.087-15.766 15.356-24.732 22.051a264.723 264.723 0 00-4.552 3.525c-8.564 6.665-17.71 12.265-27.086 17.707l-2.065 1.204c-37.128 21.352-79.974 31.284-122.56 31.108l-2.796-.005c-14.065-.047-27.736-.64-41.579-3.307l-2.727-.488C149.88 495.762 92.793 462.23 56 414l-1.267-1.642C30.68 381.068 14.518 345.425 6.25 306.875l-.603-2.777c-3.224-15.821-4.028-31.615-3.96-47.723l.007-2.786C1.748 239.215 2.263 225.149 5 211l.602-3.133C15.32 159.022 38.456 114.797 73 79l1.717-1.783C82.08 69.61 89.567 62.433 98 56l1.642-1.267c31.38-24.12 67.276-40.57 106.046-48.483l2.946-.603c15.66-3.032 31.009-4.027 46.928-3.96zM88 81l-1.815 1.728C77.291 91.26 69.33 100.098 62 110l-2.172 2.863C22.638 162.667 6.178 227.5 15 289c6.036 39.212 20.108 77.057 44 109l2.484 3.402C67.443 409.45 74.058 416.795 81 424l1.771 1.854c8.52 8.88 17.324 16.849 27.229 24.146l1.697 1.275c34.88 26.19 76.12 41.612 119.303 46.725l3.281.398C291.578 503.978 351.824 487.328 398 453l1.723-1.256c8.66-6.324 16.56-13.309 24.277-20.744l1.854-1.771c8.88-8.52 16.849-17.324 24.146-27.229l1.275-1.697C489.096 349.933 505.546 285.346 497 223c-5.923-39.182-20.15-77.113-44-109l-2.484-3.402C444.557 102.55 437.942 95.205 431 88l-1.771-1.854C420.709 77.266 411.905 69.297 402 62l-1.697-1.275C325.263 4.38 225.238-1.018 88 81z"
        fill="#313132"
      />
      <Path
        d="M347.914 145.457A232.454 232.454 0 01360 157l1.5 1.363c17.482 16.31 28.558 40.899 34.5 63.637l.91 3.395c7.866 35.522 1.015 74.729-17.91 105.605-6.823 10.69-14.915 20.154-24 29l-1.363 1.5C340.27 375.83 321.242 385.494 303 392l-3.195 1.148c-23.65 7.884-52.623 9.164-76.805 2.852l-2.075-.52C198.757 389.85 179.652 379.41 162 365l-2.34-1.906c-4.71-3.978-8.732-8.351-12.66-13.094l-1.863-2.168C130.895 330.793 121.78 311.312 116 290l-1.04-3.793c-7.83-35.309-.745-74.56 18.04-105.207 6.823-10.69 14.915-20.154 24-29l1.363-1.5c16.31-17.482 40.899-28.558 63.637-34.5l3.395-.91c42.842-9.486 89.152 2.233 122.52 30.367zM197 138l-1.934 1c-9.192 4.807-17.294 10.066-25.066 17l-2.73 2.297c-11.363 9.808-19.91 21.69-27.27 34.703l-1.613 2.848c-16.128 30.297-18.404 65.949-8.835 98.574 2.212 7.194 4.912 13.923 8.448 20.578l.996 1.917c4.808 9.2 10.064 17.305 17.004 25.083l2.297 2.73c9.808 11.363 21.69 19.91 34.703 27.27l2.848 1.613c30.297 16.128 65.949 18.404 98.574 8.835 7.194-2.212 13.923-4.912 20.578-8.448l1.917-.996c9.2-4.808 17.305-10.064 25.083-17.004l2.73-2.297c11.363-9.808 19.91-21.69 27.27-34.703l1.613-2.848c16.128-30.297 18.404-65.949 8.835-98.574-2.212-7.194-4.912-13.923-8.448-20.578l-.996-1.917c-4.808-9.2-10.064-17.305-17.004-25.083l-2.297-2.73C331.884 141.992 299.006 126.8 266 124c-23.995-1.326-47.593 2.88-69 14z"
        fill="#313132"
      />
    </Svg>
  )
}

export default Border;
