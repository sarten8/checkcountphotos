import { photos } from './photos'

export const routes = (app) => {
    app.get('/photos', (req, res) => {
      let [ min, max ] = [Math.min(...photos), Math.max(...photos)];
      let out = Array.from(Array(max-min),(v,i)=>i+min).filter(i=>!photos.includes(i));
      res.json({ 
        countPhotos: photos.length,
        countMissing: out.length,
        first: min,
        last: max,
        missing: out,
      })
    })
  }