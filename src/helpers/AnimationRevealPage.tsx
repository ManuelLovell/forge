/* framer-motion and useInView here are used to animate the sections in when we reach them in the viewport */
import { motion, TargetAndTransition } from "framer-motion";
import useInView from "./useInView";
import { StyledDiv } from "../components/GeneralComponents";
import { JSX } from "react/jsx-runtime";

function AnimationReveal({ disabled, children }: { disabled: boolean; children: React.ReactNode })
{
    if (disabled)
    {
        return <>{children}</>;
    }

    if (!Array.isArray(children)) children = [children];

    const directions = ["left", "right"];
    const childrenArray = Array.isArray(children) ? children : Array.from(children);
    const childrenWithAnimation = childrenArray.map((child: React.ReactNode, i: number) =>
    {
        return (
            <AnimatedSlideInComponent key={i} direction={directions[i % directions.length]}>
                {child}
            </AnimatedSlideInComponent>
        );
    });
    return <>{childrenWithAnimation}</>;
}

function AnimatedSlideInComponent({ direction = "left", offset = 30, children }: { direction?: string; offset?: number; children: React.ReactNode })
{
    const [ref, inView] = useInView({ margin: `-${offset}px 0px 0px 0px` });

    const x: Record<string, string> = { target: "0%" };

    if (direction === "left") x.initial = "-150%";
    else x.initial = "150%";

    return (
        <div ref={ref}>
            <motion.section
                initial={{ x: x.initial }}
                animate={{
                    x: inView && x.target,
                    transitionEnd: {
                        x: inView && 0
                    }
                } as TargetAndTransition}
                transition={{ type: "spring", damping: 50, stiffness: 500 }}
            >
                {children}
            </motion.section>
        </div>
    );
}

export default (props: JSX.IntrinsicAttributes & { disabled: any; children: any; }) => (
    <StyledDiv className="App">
        <AnimationReveal {...props} />
    </StyledDiv>
);
