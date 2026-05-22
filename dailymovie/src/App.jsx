import VideoPlayer from './components/VideoPlayer'
import './App.css'

function App() {
const movieUrl="https://dailyonemovie-assets.s3.us-east-005.backblazeb2.com/large-uploads/35cbcb84-8e4e-4aab-9dbc-fdbb29ce15f1_Mufasa.mp4?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20260522T062807Z&X-Amz-SignedHeaders=host&X-Amz-Credential=0052d66df71c9350000000002%2F20260522%2Fus-east-005%2Fs3%2Faws4_request&X-Amz-Expires=32400&X-Amz-Signature=ca802cd66a8b3cde435865091f85acf78c9870274c4668e6272ed763e9a25831";

const posterUrl="https://dailyonemovie-assets.s3.us-east-005.backblazeb2.com/large-uploads/2a8f0ddd-efb0-4e62-b2ae-9032af20d2e9_null?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20260522T062807Z&X-Amz-SignedHeaders=host&X-Amz-Credential=0052d66df71c9350000000002%2F20260522%2Fus-east-005%2Fs3%2Faws4_request&X-Amz-Expires=32400&X-Amz-Signature=6ea7603a1f8db84515b5c148eec7df85d7908f9ac33bb6f628eefc98a2f021df";

const title="Mufasa";

  return (
    <>
      <VideoPlayer movieUrl={movieUrl} posterUrl={posterUrl} title={title}></VideoPlayer>
    </>
  )
}

export default App
