"use client"

import * as React from "react"
import { Button, Card, CardBody, CardFooter, Popover, PopoverContent, PopoverTrigger, Slider, Spinner } from "@heroui/react";
import ReactPlayer from "react-player";
import { Icon } from "@iconify/react";
import { AnimatePresence, motion } from "framer-motion";
import { OnProgressProps } from "react-player/base";
import moment from "moment";



type VideoPlayerPropsType = {

}


export const VideoPlayer: React.FC<VideoPlayerPropsType> = (props) => {

    const {

    } = props;

    const wrapperRef = React.useRef<HTMLDivElement>(null);
    const playerRef = React.useRef<ReactPlayer>(null);

    const [playing, setPlaying] = React.useState<boolean>(false)
    const [isLoading, setLoading] = React.useState<boolean>(true);
    const [duration, setDuration] = React.useState<number>(0);
    const [progress, setProgress] = React.useState<number>(0);
    const [loaded, setLoaded] = React.useState<number>(0);
    const [playedSeconds, setPlayedSeconds] = React.useState<number>(0);

    const [pip, setPip] = React.useState<boolean>(false)
    const [isFullscreen, setFullscreen] = React.useState(false);
    const [volume, setVolume] = React.useState(50);
    const [muted, setMuted] = React.useState(false);
    const [speed, setSpeed] = React.useState(1);

    const togglePlaying = () => {
      setPlaying((p) => (!p))
    }

    const handleReady = () => {
      setLoading(false);
    }
  
    const handleStart = () => {
      setLoading(false);
    }
  
    const handleBuffer = () => {
      setLoading(true);
    }
  
    const handleBufferEnd = () => {
      setLoading(false);
    }

    const handleDuration = (d: number) => {
      setDuration(d)
    }

    const handleProgress = (state: OnProgressProps) => {
      setProgress(state.played)
      setLoaded(state.loaded)
      setPlayedSeconds(state.playedSeconds)
    }

    const handleEnded = () => {
      setPlaying(false);
      setPlayedSeconds(0);
      if (playerRef.current) {
        playerRef.current.seekTo(0);
      }
    }

    
  const handleForward = () => {
    if (playerRef.current) {
      const newTime = playedSeconds + 15;
      playerRef.current.seekTo(newTime, 'seconds');
      setPlayedSeconds(newTime);
    }
  };

  const handleBackward = () => {
    if (playerRef.current) {
      const newTime = Math.max(0, playedSeconds - 15);
      playerRef.current.seekTo(newTime, 'seconds');
      setPlayedSeconds(newTime);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (playerRef.current && duration > 0) {
      const progressBar = e.currentTarget;
      const rect = progressBar.getBoundingClientRect();
      const clickPosition = e.clientX - rect.left;
      const progressBarWidth = rect.width;
      const newTime = (clickPosition / progressBarWidth) * duration;
      
      playerRef.current.seekTo(newTime, 'seconds');
      setPlayedSeconds(newTime);
    }
  };


  const togglePip = () => {
    setPip((p) => (!p))
  }

  const toggleFullscreen = () => {
    if (playerRef.current) {      
      if (!document.fullscreenElement) {
        wrapperRef.current?.requestFullscreen().catch(err => {
          console.error('خطا در ورود به فول‌اسکرین:', err);
        });
      } else {
        document.exitFullscreen();
      }
    }
  };

  React.useEffect(() => {
    const handleFullscreenChange = () => {
      setFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);


  const handleVolumeChange = (newVolume: number) => {
    if (newVolume <= 0) {
      setVolume(0)
      setMuted(true)
    } else {
      if (newVolume >= 100) setVolume(100)
      else setVolume(newVolume)
      setMuted(false)
    }
  }

  const handleSpeedChange = (newSpeed: number) => {
    if (newSpeed <= 0.25) setSpeed(0.25)
    else if (newSpeed >= 2) setSpeed(2)
    else setSpeed(newSpeed)
  }
  

    return (
      <Card ref={wrapperRef} fullWidth shadow="none" className="group/player -space-y-1 border-2 border-primary-100 rounded-3xl">
        <CardBody
          className="relative w-full p-2 pb-0 group/video cursor-pointer"
          onClick={togglePlaying}
        >
          <div className="w-full h-full relative overflow-hidden rounded-t-xl bg-black/20">
            <ReactPlayer
              ref={playerRef}
              url="/hybrid.mp4"
              title="Video Player"
              width="100%"
              height="100%"
              controls={false}
              playing={playing}
              pip={pip}
              muted={muted}
              volume={volume / 100}
              playbackRate={speed}
              stopOnUnmount={true}
              loop={false}
              playsinline
              onProgress={handleProgress}
              onEnded={handleEnded}
              onReady={handleReady}
              onStart={handleStart}
              onBuffer={handleBuffer}
              onBufferEnd={handleBufferEnd}
              onDuration={handleDuration}
              progressInterval={100}
              style={{objectFit: 'contain'}}
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <AnimatePresence>
                {(!playing || isLoading) && (
                  <motion.div
                    key="button"
                    className="bg-primary rounded-2xl lg:rounded-3xl text-white h-12 lg:h-15 w-12 lg:w-15 flex items-center justify-center"
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
                    {!playing && !isLoading && <Icon icon="solar:play-bold" width="28" height="28" />}
                    {isLoading && <Spinner size="md" color="white" />}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="absolute top-0 right-0 p-2">
              <Button 
                size="sm" 
                color="default"
                variant="bordered"
                startContent={(
                  <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.2387 3.03731C3.65983 3.03453 -0.637013 13.401 5.42743 19.465C6.77375 20.8111 8.48918 21.7279 10.3568 22.0995C12.2244 22.471 14.1603 22.2806 15.9196 21.5523C17.6789 20.824 19.1827 19.5905 20.2406 18.0078C21.2986 16.4252 21.8633 14.5645 21.8634 12.661C21.8634 7.34728 17.5554 3.03916 12.2387 3.03731ZM6.78691 7.83758C7.25056 5.43421 10.3897 4.79035 11.7621 6.81721C13.1345 8.84315 11.3716 11.5185 8.96726 11.056C8.61264 10.9879 8.27491 10.8506 7.97338 10.652C7.67185 10.4533 7.41244 10.1973 7.20995 9.89838C7.00747 9.5995 6.86589 9.26366 6.7933 8.91006C6.72071 8.55646 6.71854 8.19202 6.78691 7.83758ZM10.7867 16.1523C10.3203 18.5547 7.18023 19.1939 5.81057 17.1661C4.44091 15.1384 6.20573 12.4667 8.61004 12.9302C8.96471 12.9987 9.3024 13.1364 9.60379 13.3354C9.90517 13.5345 10.1644 13.791 10.3665 14.0902C10.5687 14.3895 10.7098 14.7256 10.7819 15.0794C10.854 15.4332 10.8556 15.7978 10.7867 16.1523ZM11.9528 13.9274C10.8866 13.7211 10.5998 12.3298 11.4984 11.7192C12.396 11.1087 13.5862 11.8858 13.3863 12.9533C13.3566 13.1115 13.296 13.2623 13.2078 13.397C13.1197 13.5317 13.0058 13.6476 12.8726 13.7382C12.7395 13.8287 12.5898 13.892 12.4321 13.9245C12.2743 13.957 12.1108 13.958 11.9528 13.9274ZM17.6887 17.4779C17.225 19.8813 14.0859 20.5242 12.7135 18.4983C11.3401 16.4714 13.1031 13.797 15.5083 14.2586C15.863 14.3267 16.2009 14.464 16.5024 14.6627C16.804 14.8614 17.0635 15.1175 17.266 15.4165C17.4685 15.7155 17.6101 16.0514 17.6826 16.4052C17.7551 16.7589 17.7572 17.1234 17.6887 17.4779ZM15.8683 12.3881C13.464 11.9246 12.8208 8.78394 14.8485 7.41112C16.8752 6.03921 19.5507 7.8015 19.0889 10.2049C19.0212 10.5598 18.8841 10.8979 18.6855 11.1998C18.487 11.5017 18.2308 11.7614 17.9316 11.9642C17.6325 12.167 17.2962 12.3088 16.9422 12.3816C16.5881 12.4543 16.2232 12.4565 15.8683 12.3881ZM13.7092 23.0839L15.8045 23.6482C16.6855 23.8819 17.6233 23.7563 18.4116 23.299C19.2 22.8418 19.7745 22.0902 20.0088 21.2097L20.601 18.9876C18.9335 21.208 16.4563 22.6802 13.7083 23.0839H13.7092ZM20.7824 4.89211L18.5956 4.31023C19.7007 5.15996 20.626 6.22066 21.3177 7.43075C22.0094 8.64085 22.4538 9.97623 22.625 11.3594L23.2265 9.0846C23.4567 8.20459 23.3285 7.26926 22.8701 6.48357C22.4116 5.69787 21.6602 5.12591 20.7806 4.89303L20.7824 4.89211ZM1.75434 14.3372L1.25367 16.2244C1.0199 17.1051 1.14556 18.0425 1.60301 18.8306C2.06046 19.6187 2.81227 20.1929 3.69315 20.4271L5.64306 20.947C3.56131 19.3109 2.17346 16.951 1.75434 14.3372ZM10.7173 2.21213L8.67482 1.67928C8.23828 1.56304 7.7831 1.53394 7.3353 1.59365C6.8875 1.65335 6.45586 1.80069 6.06506 2.02725C5.67425 2.2538 5.33195 2.55513 5.05772 2.914C4.78348 3.27287 4.58269 3.68225 4.46682 4.11873L3.9569 6.04476C5.6391 3.95188 8.05696 2.5808 10.7173 2.21213Z" fill="white"/>
                  </svg>
                )}
                className="text-white rounded-xl px-2 lg:h-10"
              >
                مشاهده در آپارات
              </Button>
          </div>
          </div>
        </CardBody>
        <CardFooter className="bg-foreground rounded-t-2xl p-2 px-3 shrink-0 z-[1]">
          <div className="w-full flex flex-col gap-2.5 items-center">
            <div className="flex flex-row gap-8 items-center">
              <Button
                size="sm"
                isIconOnly
                color="default"
                variant="light"
                className="text-white/50 rounded-xl"
                onPress={handleForward}
              >
                <Icon icon="solar:rewind-15-seconds-forward-outline" width="24" height="24" />
              </Button>
              <Button
                size="sm"
                isIconOnly
                color="primary"
                variant="solid"
                className="rounded-2xl h-10 w-10 p-1.5 lg:rounded-3xl lg:h-14 lg:w-14 lg:p-0"
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
                onPress={handleBackward}
              >
                <Icon icon="solar:rewind-15-seconds-back-outline" width="24" height="24" />
              </Button>
            </div>
            <div
              dir="ltr" 
              className="overflow-hidden relative bg-white/40 rounded-full w-full h-1 cursor-pointer"
              onClick={handleProgressClick}
            >
              <div 
                className="absolute left-0 top-0 bg-white/20 rounded-full h-full transition-width duration-300 z-[1]"
                style={{width: `${loaded >= 1 ? 0 : loaded * 100}%`}}
              />
              <div
                className="absolute left-0 top-0 bg-primary rounded-full h-full transition-width duration-300 z-[2] cursor-pointrt"
                style={{width: `${progress * 100}%`}}
              />
            </div>
            <div className="w-full px-2 lg:px-5 py-0 lg:py-3 flex justify-between flex-wrap gap-1 lg:gap-3 items-center">
              <div className="flex flex-row gap-2 items-center justify-center flex-1 truncate min-w-full lg:min-w-0">
                <h6 className="text-xs lg:text-base font-normal text-center text-white max-w-full truncate">
                  دبیرستــــان غـــــیردولتی دورۀ اول و دوم شــــهریار ایـــــران 
                </h6>
              </div>
              <div className="flex flex-row gap-0.5 items-center text-white lg:order-first">
                <Button
                  size="sm"
                  isIconOnly
                  color="default"
                  variant="light"
                  className="text-white rounded-xl h-7 min-w-7 w-7 p-0"
                  onPress={toggleFullscreen}
                >
                  <Icon icon={isFullscreen ? "solar:quit-full-screen-outline" : "solar:full-screen-outline"} width="16" height="16" />
                </Button>
                <Button
                  size="sm"
                  isIconOnly
                  color="default"
                  variant="light"
                  className="text-white rounded-xl h-7 min-w-7 w-7 p-0"
                  onPress={togglePip}
                >
                  <Icon icon={pip ? "solar:quit-pip-outline" : "solar:to-pip-outline"} width="16" height="16" />
                </Button>
                <Popover placement="top" showArrow={true} color="primary">
                  <PopoverTrigger>
                    <Button
                      size="sm"
                      isIconOnly
                      color="default"
                      variant="light"
                      className="text-white rounded-xl h-7 min-w-7 w-7 p-0"
                    >
                      <Icon icon="solar:settings-outline" width="16" height="16" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="px-1 py-2 min-w-48 flex flex-col gap-1">
                      <div className="flex justify-between items-center">
                        <div className="text-xs font-semibold">سرعت پخش</div>
                        <div className="text-xs font-light">{speed}x</div>
                      </div>
                      <div dir="ltr" className="flex flex-row gap-2 items-center">
                        <Slider
                          aria-label="Volume"
                          className="max-w-md"
                          color="success"
                          size="sm"
                          value={speed}
                          minValue={0.25}
                          maxValue={2}
                          step={0.25}
                          onChange={(value) => handleSpeedChange(value as number)}
                          startContent={(
                            <Button
                              size="sm"
                              isIconOnly
                              color="default"
                              variant="light"
                              className="text-white rounded-xl h-7 min-w-7 w-7 p-0"
                              onPress={() => handleSpeedChange(speed - 0.25)}
                            >
                              <Icon icon="solar:minus-square-outline" width="16" height="16" />
                            </Button>
                          )}
                          endContent={(
                            <Button
                              size="sm"
                              isIconOnly
                              color="default"
                              variant="light"
                              className="text-white rounded-xl h-7 min-w-7 w-7 p-0"
                              onPress={() => handleSpeedChange(speed + 0.25)}
                            >
                              <Icon icon="solar:add-square-outline" width="16" height="16" />
                            </Button>
                          )}
                        />
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
                <Popover placement="top" showArrow={true} color="primary">
                  <PopoverTrigger>
                    <Button
                      size="sm"
                      isIconOnly
                      color="default"
                      variant="light"
                      className="text-white rounded-xl h-7 min-w-7 w-7 p-0"
                    >
                      <Icon icon={muted ? "solar:volume-cross-outline" : "solar:volume-loud-outline"} width="16" height="16" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <div className="px-1 py-2 min-w-48 flex flex-col gap-1">
                      <div className="flex justify-between items-center">
                        <div className="text-xs font-semibold">حجم صدا</div>
                        <div className="text-xs font-light">{volume}%</div>
                      </div>
                      <div dir="ltr" className="flex flex-row gap-2 items-center">
                        <Slider
                          aria-label="Volume"
                          className="max-w-md"
                          color="success"
                          size="sm"
                          value={volume}
                          minValue={0}
                          maxValue={100}
                          step={1}
                          onChange={(value) => handleVolumeChange(value as number)}
                          startContent={(
                            <Button
                              size="sm"
                              isIconOnly
                              color="default"
                              variant="light"
                              className="text-white rounded-xl h-7 min-w-7 w-7 p-0"
                              onPress={() => handleVolumeChange(volume - 10)}
                            >
                              <Icon icon="solar:volume-small-bold" width="16" height="16" />
                            </Button>
                          )}
                          endContent={(
                            <Button
                              size="sm"
                              isIconOnly
                              color="default"
                              variant="light"
                              className="text-white rounded-xl h-7 min-w-7 w-7 p-0"
                              onPress={() => handleVolumeChange(volume + 10)}
                            >
                              <Icon icon="solar:volume-loud-bold" width="16" height="16" />
                            </Button>
                          )}
                        />
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
              <div className="flex flex-row gap-0 items-center text-white text-xs lg:text-sm font-light">
                <Icon icon="solar:alarm-outline" width="16" height="16" className="mx-2" />
                <span className="min-w-10 lg:min-w-12 text-right">{moment.utc(duration * 1000).format('mm:ss')}</span> 
                <span>|</span>
                <span className="min-w-10 lg:min-w-12 text-left">{moment.utc(playedSeconds * 1000).format('mm:ss')}</span>
              </div>
            </div>

          </div>
        </CardFooter>
      </Card>
    )
}

