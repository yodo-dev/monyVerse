import DiscoveryCard from "@/app/(dashboard)/components/Space/DiscoveryCard";
import React from "react";

const Discovery = () => {
  return (
    <div>
      <DiscoveryCard
        title="Top Posts"
        description="The most popular posts, polls or questions will be here"
        btnTitle="Create Post"
      />
      <DiscoveryCard
        title="Members near you"
        description="Anyone who adds their location near you will appear here."
        btnTitle="Invite"
        members={true}
      />
      <DiscoveryCard
        title="Top Members"
        description="Anyone who adds their location near you will appear here."
        btnTitle="Invite"
        top={true}
      />
      <DiscoveryCard
        title="Featured"
        description="To add a Post to your Featured Section, click on the menu in the top right corner of the post, and select"
        btnTitle="Create Post"
      />
      <DiscoveryCard
        title="Upcoming Events"
        description="Any upcoming Event in Dev's Test Space will appear here!"
        btnTitle="Create Event"
      />
    </div>
  );
};

export default Discovery;
