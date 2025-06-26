import * as React from "react"
import { VideoPlayer } from "@/components/VideoPlayer/VideoPlayer";


type IntroVideoSectionPropsType = {

}





export const IntroVideoSection: React.FC<IntroVideoSectionPropsType> = (props) => {

    const {
      
    } = props;

    

    return (
      <div className="w-full bg-primary-50 py-4 px-2 2xl:px-0">
        <div className="grid grid-cols-12 gap-4 w-full max-w-7xl mx-auto">
          <div className="col-span-4">
          </div>
          <div className="col-span-8">
            <VideoPlayer/>
          </div>
        </div>
      </div>
    )
}

