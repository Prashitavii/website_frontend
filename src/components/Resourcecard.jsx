import React from "react";
import { Button } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const ResourceCard = (props) => {
  return (
    <div className="flex justify-center w-full ">
      <div className="transition ease-in-out hover:scale-105 delay-250 w-11/12 md:w-3/4 rounded-md p-5 px-6 mb-5 bg-white shadow-lg hover:shadow-2xl hover:shadow-slate-300">
        <h5 className="mt-1 text-2xl mb-1 font-bold tracking-tight text-[#241e1e]">
          {props.data.title}
        </h5>
        <p className="mb-2 text-sm text-gray-600">{props.data.description}</p>
        <div className="flex justify-end">
          <a href={props.data.link} target="_blank" rel="noopener noreferrer">
            <Button
              rightIcon={<ExternalLinkIcon />}
              colorScheme="blue"
              variant="solid"
              className="mt-2"
            >
              Open Link
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResourceCard;

