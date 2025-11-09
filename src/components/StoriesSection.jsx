import React, { useRef } from "react";

const stories = [
  {
    id: 1,
    title: "Beginner's Guide to Mushroom Retreats",
    date: "Sep 9",
    readTime: "10 minute read",
    img: "https://images.unsplash.com/photo-1756678901897-0c1e570bea5d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
  },
  {
    id: 2,
    title: "Healing From Generational Trauma: Tools to Break the Cycle",
    date: "Sep 9",
    readTime: "10 minute read",
    img: "https://images.unsplash.com/photo-1761834614369-504c62d53e18?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735",
  },
  {
    id: 3,
    title: "How You Can Recover from Emotional Trauma",
    date: "Aug 20",
    readTime: "10 minute read",
    img: "https://images.unsplash.com/photo-1761875833380-596a792b80d8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  },
  {
    id: 4,
    title: "Navigating the Legal Landscape of Psychedelics and Plant Medicine",
    date: "Aug 20",
    readTime: "18 minute read",
    img: "https://images.unsplash.com/photo-1756916475363-e4778b98162b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  },
  {
    id: 5,
    title: "Healing Burnout: Retreats vs. At-Home Self-Care Strategies",
    date: "Jan 22",
    readTime: "9 minute read",
    img: "https://images.unsplash.com/photo-1531983412531-1f49a365ffed?q=80&w=1200",
  },
  {
    id: 6,
    title: "10 Ways Meditation Can Transform Your Mind and Life",
    date: "Feb 5",
    readTime: "8 minute read",
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200",
  },
  {
    id: 7,
    title: "Discovering Inner Peace Through Nature Retreats",
    date: "Mar 12",
    readTime: "12 minute read",
    img: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff?q=80&w=1200",
  },
  {
    id: 8,
    title: "How Breathwork Can Help Heal Emotional Wounds",
    date: "Apr 4",
    readTime: "11 minute read",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200",
  },
  {
    id: 9,
    title: "The Power of Stillness: What Silence Teaches Us",
    date: "May 19",
    readTime: "9 minute read",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200",
  },
  {
    id: 10,
    title: "5 Must-Visit Wellness Retreats Around the World",
    date: "Jun 25",
    readTime: "14 minute read",
    img: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1200",
  },
  {
    id: 11,
    title: "Ayahuasca Journeys: Finding Meaning Beyond the Mind",
    date: "Jul 2",
    readTime: "16 minute read",
    img: "https://images.unsplash.com/photo-1761810399655-8be9a861e241?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
  },
  {
    id: 12,
    title: "Reconnecting with Your Body Through Sound Healing",
    date: "Jul 28",
    readTime: "10 minute read",
    img: "https://images.unsplash.com/photo-1740498506757-dff9c97c6f07?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  },
  {
    id: 13,
    title: "The Science of Mindfulness: How Meditation Rewires Your Brain",
    date: "Aug 10",
    readTime: "12 minute read",
    img: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=1200",
  },
  {
    id: 14,
    title: "Self-Compassion: The Missing Key to True Healing",
    date: "Aug 28",
    readTime: "10 minute read",
    img: "https://images.unsplash.com/photo-1744360850965-5b23c85a8e46?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687",
  },
  {
    id: 15,
    title: "The Art of Slow Living: Rediscovering Simplicity in a Busy World",
    date: "Sep 15",
    readTime: "9 minute read",
    img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200",
  },
];

const StoriesSection = () => {
  const containerRef = useRef(null);

  // mutable refs to avoid re-renders
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);
  const velocity = useRef(0);
  const lastX = useRef(0);
  const lastTime = useRef(0);
  const animationFrameId = useRef(null);

  // Momentum scrolling with easing
  const applyMomentum = () => {
    if (Math.abs(velocity.current) > 0.5) {
      containerRef.current.scrollLeft -= velocity.current;
      velocity.current *= 0.92; // Reduced from 0.95 to 0.92 for longer momentum
      animationFrameId.current = requestAnimationFrame(applyMomentum);
    } else {
      velocity.current = 0;
    }
  };

  // ----- Mouse handlers -----
  const onMouseDown = (e) => {
    isDragging.current = true;
    containerRef.current.classList.add("cursor-grabbing");
    startX.current = e.pageX - containerRef.current.offsetLeft;
    startScrollLeft.current = containerRef.current.scrollLeft;
    lastX.current = e.pageX;
    lastTime.current = Date.now();
    velocity.current = 0;

    // Cancel any ongoing momentum
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();

    const currentTime = Date.now();
    const currentX = e.pageX;
    const timeDiff = currentTime - lastTime.current;

    if (timeDiff > 0) {
      velocity.current = ((currentX - lastX.current) / timeDiff) * 16; // Normalize to ~60fps
    }

    lastX.current = currentX;
    lastTime.current = currentTime;

    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 4; // Increased from 1.5 to 2.5 for faster movement
    containerRef.current.scrollLeft = startScrollLeft.current - walk;
  };

  const endDrag = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (containerRef.current) {
      containerRef.current.classList.remove("cursor-grabbing");
    }

    // Start momentum scrolling
    if (Math.abs(velocity.current) > 1) {
      applyMomentum();
    }
  };

  // ----- Touch handlers -----
  const onTouchStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches[0].pageX - containerRef.current.offsetLeft;
    startScrollLeft.current = containerRef.current.scrollLeft;
    lastX.current = e.touches[0].pageX;
    lastTime.current = Date.now();
    velocity.current = 0;

    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }
  };

  const onTouchMove = (e) => {
    if (!isDragging.current) return;

    const currentTime = Date.now();
    const currentX = e.touches[0].pageX;
    const timeDiff = currentTime - lastTime.current;

    if (timeDiff > 0) {
      velocity.current = ((currentX - lastX.current) / timeDiff) * 16;
    }

    lastX.current = currentX;
    lastTime.current = currentTime;

    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 7; // Increased from 1.5 to 2.5 for faster movement
    containerRef.current.scrollLeft = startScrollLeft.current - walk;
  };

  const onTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    // Start momentum scrolling
    if (Math.abs(velocity.current) > 1) {
      applyMomentum();
    }
  };

  return (
    <section className="w-full bg-[#E8F1F8] py-16 px-10 text-[#1A3A52]">
      {/* Inline CSS to hide scrollbar cross-browser (no plugin) */}
      <style>{`
        /* Hide scrollbar for Webkit */
        .no-scrollbar::-webkit-scrollbar { display: none; }
        /* Hide scrollbar for IE, Edge */
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="flex justify-between items-center mb-10">
        <h2 className="text-3xl font-semibold">Stories and Inspirations</h2>
        <button className="border border-[#1A3A52] rounded-full px-6 py-2 font-medium hover:bg-[#1A3A52] hover:text-[#F8F9FA] transition">
          READ MORE
        </button>
      </div>

      {/* Scrollable row: mouse + touch handlers attached */}
      <div
        ref={containerRef}
        className="flex space-x-6 overflow-x-auto no-scrollbar scroll-smooth cursor-grab select-none"
        onMouseDown={onMouseDown}
        onMouseLeave={endDrag}
        onMouseUp={endDrag}
        onMouseMove={onMouseMove}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        // optional: improve touch scrolling performance on mobile
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {stories.map((story) => (
          <article
            key={story.id}
            className="min-w-[280px] md:min-w-[360px] lg:min-w-[400px] rounded-xl overflow-hidden relative group flex-shrink-0"
          >
            <img
              src={story.img}
              alt={story.title}
              className="w-full h-[350px] object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-xl flex flex-col justify-end p-6">
              <h3 className="text-lg font-semibold mb-2 leading-tight text-white">
                {story.title}
              </h3>
              <p className="text-sm text-gray-300">
                {story.date} • {story.readTime}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default StoriesSection;