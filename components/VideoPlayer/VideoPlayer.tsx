"use client"

import * as React from "react"
import { Button, Card, CardBody, CardFooter } from "@heroui/react";
import ReactPlayer from "react-player";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";


type VideoPlayerPropsType = {

}


export const VideoPlayer: React.FC<VideoPlayerPropsType> = (props) => {

    const {

    } = props;

    const playerRef = React.useRef<ReactPlayer>(null);

    const [playing, setPlaying] = React.useState<boolean>(false)
    const togglePlaying = () => {
      setPlaying((p) => (!p))
    }

    return (
      <Card fullWidth shadow="none" className="group/player border-2 border-primary-100 rounded-3xl">
        <CardBody
          className="relative w-full p-2 pb-0 group/video cursor-pointer"
          onClick={togglePlaying}
        >
          <div className="w-full h-full relative overflow-hidden rounded-t-xl">
            <ReactPlayer
              ref={playerRef}
              url={`https://www.youtube.com/watch?v=dQw4w9WgXcQ`}
              title="Video Player"
              width="400px"
              height="400px"
              controls={false}
              playing={playing}
              pip={false}
              stopOnUnmount={true}
              loop={false}
              playsinline
              // onProgress={handleProgress}
              progressInterval={100}
              style={{objectFit: 'contain'}}
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/20 flex items-center justify-center">
              {/* <AnimatePresence>
                {(!playing) && (
                  <motion.div
                    key="play-button"
                    className="bg-primary group-hover/video:bg-foreground rounded-3xl text-white h-15 w-15 flex items-center justify-center"
                    initial={{scale: 1}}
                    animate={{scale: 1}}
                    exit={{scale: 0}}
                  >
                    <Icon icon="solar:play-bold" width="28" height="28" />
                  </motion.div>
                )}
              </AnimatePresence> */}
              <AnimatePresence>
                {!playing && (
                  <motion.div
                    key="play-button"
                    className="bg-primary rounded-3xl text-white h-15 w-15 flex items-center justify-center"
                    initial={{ 
                      scale: 0,
                      opacity: 0,
                      transition: { duration: 0.2 } 
                    }}
                    animate={{
                      scale: 1,
                      opacity: 1,
                      transition: { duration: 0.2 } 
                    }}
                    exit={{ 
                      scale: 0,
                      opacity: 0,
                      transition: { duration: 0.2 } 
                    }}
                  >
                    <Icon icon="solar:play-bold" width="28" height="28" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </CardBody>
        <CardFooter className="bg-foreground rounded-t-2xl p-2 px-3">
          <div className="w-full flex flex-col gap-2.5 items-center">
            <div className="flex flex-row gap-8 items-center">
              <Button
                size="sm"
                isIconOnly
                color="default"
                variant="light"
                className="text-white/50 rounded-xl"
              >
                <Icon icon="solar:rewind-15-seconds-forward-outline" width="24" height="24" />
              </Button>
              <Button
                size="lg"
                isIconOnly
                color="primary"
                variant="solid"
                className="rounded-2xl"
                onPress={togglePlaying}
              >
                {playing && (
                  <Icon icon="solar:pause-circle-bold-duotone" width="36" height="36" />
                )}
                {!playing && (
                  <Icon icon="solar:play-circle-bold-duotone" width="36" height="36" />
                )}
              </Button>
              <Button
                size="sm"
                isIconOnly
                color="default"
                variant="light"
                className="text-white/50 rounded-xl"
              >
                <Icon icon="solar:rewind-15-seconds-back-outline" width="24" height="24" />
              </Button>
            </div>
            <div dir="ltr" className="overflow-hidden relative bg-white/40 rounded-full w-full h-1">
              <div className="bg-primary-500 rounded-full h-full w-1/2"></div>
            </div>
            <div className="w-full px-5 py-3 flex justify-between gap-3 items-center">
              <div className="flex flex-row gap-0.5 items-center text-white">
                <Button
                  size="sm"
                  isIconOnly
                  color="default"
                  variant="light"
                  className="text-white rounded-xl h-7 min-w-7 w-7 p-0"
                >
                  <Icon icon="solar:full-screen-outline" width="16" height="16" />
                </Button>
                <Button
                  size="sm"
                  isIconOnly
                  color="default"
                  variant="light"
                  className="text-white rounded-xl h-7 min-w-7 w-7 p-0"
                >
                  <Icon icon="solar:pip-2-outline" width="16" height="16" />
                </Button>
                <Button
                  size="sm"
                  isIconOnly
                  color="default"
                  variant="light"
                  className="text-white rounded-xl h-7 min-w-7 w-7 p-0"
                >
                  <Icon icon="solar:settings-outline" width="16" height="16" />
                </Button>
                
                <Button
                  size="sm"
                  isIconOnly
                  color="default"
                  variant="light"
                  className="text-white rounded-xl h-7 min-w-7 w-7 p-0"
                >
                  <Icon icon="solar:volume-loud-outline" width="16" height="16" />
                </Button>
              </div>
              <div className="flex flex-row gap-2 items-center">
                <h6 className="text-md font-normal text-white">
                  دبیرستــــان غـــــیردولتی دورۀ اول و دوم شــــهریار ایـــــران 
                </h6>
              </div>
              <div className="flex flex-row gap-2 items-center text-white text-sm font-light">
                <Icon icon="solar:alarm-outline" width="16" height="16" />
                <span>24:10</span> 
                <span>|</span>
                <span>01:43</span>
              </div>
            </div>

          </div>
        </CardFooter>
      </Card>
    )
}

