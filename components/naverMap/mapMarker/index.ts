export const mapMarker = (name: string, field: string, level: number) =>
  `
  <div class="marker-container">
    <img src="/assets/icon/marker.png" class="marker-icon"/>
    <div class="marker-back">
      <div class="marker-info">
        <span class="marker-name">${name}</span>
        <span class="marker-field">${field}</span>
      </div>
      <div class="marker-level">
        <img src="/assets/icon/level.svg"/>
        <span>${level}</span>
      </div>
    </div>
  </div>`;

export const mapMarkerHover = (name: string, field: string, level: number) =>
  `
  <div class="marker-container">
    <img src="/assets/icon/markerHover.png" class="marker-icon"/>
    <div class="marker-back-hover">
      <div class="marker-info">
        <span class="marker-name-hover">${name}</span>
        <span class="marker-field-hover">${field}</span>
      </div>
      <div class="marker-level-hover">
        <img src="/assets/icon/level.svg"/>
        <span>${level}</span>
      </div>
    </div>
  </div>`;
