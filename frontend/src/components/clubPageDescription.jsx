import { FaFacebook, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ClubPageDescription({ clubInfo, clubMembers }) {
  const { clubName } = useParams();

  return (
    <>
      {/* Wrap behind shadow effect*/}
      <div className="-z-10 absolute w-3 h-full rounded-r-md bg-primary-800 -right-2"></div>
      <div className="-z-10 absolute w-2 h-full rounded-2xl bg-primary-800 brightness-75 -right-2"></div>
      {/* Left panel container */}
      <div className="py-5 px-6 bg-primary-800 w-full shadow-[5px_1px_6px] shadow-black/85 h-[122vh] rounded-l-lg overflow-hidden">
        {/* Club Picture */}
        <img
          src={clubInfo.iconPath}
          alt="Horse head"
          className="w-full aspect-square object-cover border-2 border-primary rounded-[50%] mb-10 border-8 border-secondary-400"
        />

        <div className="grid grid-cols-2 gap-4">
          {/* Description */}
          <div className="col-span-2 inset-shadow-sm/50 bg-secondary-400 text-primary-800 text-md rounded-lg py-2 px-4">
            <div className="text-lg font-bold text-primary-500">ABOUT</div>
            <div className="mb-2">{clubInfo.description}</div>
          </div>

          {/* Members */}
          <div className="inset-shadow-sm/50  w-full justify-center flex flex-col rounded-lg bg-primary-500 text-center text-secondary p-4">
            <p className="text-2xl font-bold">{clubMembers.length}</p>
            <p className="text-md text-primary-200">Members</p>
          </div>

          {/* Enrollment Type */}
          <div className="inset-shadow-sm/50 w-full justify-center flex flex-col rounded-lg bg-primary-500 text-center text-secondary p-4">
            <p className="text-2xl font-bold">{clubInfo.enrollmentType}</p>
            <p className="text-md text-primary-200">enrollment</p>
          </div>

          {/* Leadership */}
          <div className="col-span-2 inset-shadow-sm/50 bg-secondary-400 text-primary-800 rounded-lg font-semibold py-2 px-4">
            <div className="font-bold text-lg text-primary-500 mb-2">LEADERSHIP</div>
            <div className="flex flex-col text-md justify-around gap-y-1 mb-2">
              {clubMembers
                .filter((member) => member.isLeadership)
                .map((member, i) => {
                  return (
                    <div key={i}>
                      {i !== 0 && <div className="border-b border-primary-500" />}
                      <div className="flex gap-4 items-center">
                        <div className="flex items-center justify-center bg-secondary-600 size-10 rounded-[50%]">
                          {member.firstName[0] + member.lastName[0]}
                        </div>
                        <div className="flex flex-col text-left">
                          <p>{member.firstName + " " + member.lastName}</p>
                          <p className="font-normal">{member.roleName}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>

          {/* Socials */}
          <div className="flex flex-wrap gap-x-12 justify-center col-span-2 text-secondary-200 rounded-lg font-semibold py-2 px-4 pointer-events-auto">
            {clubInfo.email && (
              <a href={"mailto:" + clubInfo.email}>
                <IoMdMail size={32} className="hover:text-secondary-800" />
              </a>
            )}
            {clubInfo.facebook && (
              <a href={clubInfo.facebook} target="_blank">
                <FaFacebook size={32} className="hover:text-secondary-800" />
              </a>
            )}
            {clubInfo.instagram && (
              <a href={clubInfo.instagram} target="_blank">
                <FaInstagram size={32} className="hover:text-secondary-800" />
              </a>
            )}
            {clubInfo.twitterx && (
              <a href={clubInfo.twitterx} target="_blank">
                <FaXTwitter size={32} className="hover:text-secondary-800" />
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
