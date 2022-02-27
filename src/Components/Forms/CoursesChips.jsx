import { Chips, createStyles, Chip } from "@mantine/core";
import React from "react";

const useStyles = createStyles((theme, _params, getRef) => {
  const iconWrapper = getRef("iconWrapper");

  return {
    iconWrapper: {
      ref: iconWrapper,
    },

    checked: {
      backgroundColor: `${theme.colors.blue[6]} !important`,
      color: theme.white,

      [`& .${iconWrapper}`]: {
        color: theme.white,
      },
    },
  };
});

function CoursesChips({ value, setValue, courses }) {
  const { classes } = useStyles();
  return (
    <Chips
      multiple
      classNames={classes}
      size="md"
      value={value}
      onChange={setValue}
    >
      {courses.map((course, idx) => (
        <Chip key={idx} value={course}>
          {course}
        </Chip>
      ))}
    </Chips>
  );
}

export default CoursesChips;
