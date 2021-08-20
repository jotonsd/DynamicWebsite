CREATE VIEW resource_session_all_data 
AS
SELECT
    `si`.`seasionID` AS `seasionID`,
    `si`.`seasionTitle` AS `seasionTitle`,
    `sg`.`seasionGroupTitle` AS `seasionGroupTitle`,
    CONCAT(
        DATE_FORMAT(`sp`.`startDate`, '%d %M %Y'),
        '-',
        DATE_FORMAT(`sp`.`endDate`, '%d %M %Y')
    ) AS `seasionPeriodrange`,
    `si`.`weakendDays` AS `weakendDays`,
    CONCAT(
        `si`.`childAgeFrom`,
        '-',
        `si`.`childAgeTo`
    ) AS `childAge`,
    `si`.`numberOfAmendisAllowed` AS `numberOfAmendisAllowed`,
    `si`.`minimumStayAtWeekday` AS `minimumStayAtWeekday`,
    `si`.`minimumStayAtWeekend` AS `minimumStayAtWeekend`,
    `si`.`minimumStayAtLongWeekend` AS `minimumStayAtLongWeekend`,
    `sp`.`seasionPeriodID` AS `seasionPeriodID`
FROM
    (
        (
            `seasioninfo` `si`
        JOIN `seasiongroup` `sg`
        ON
            (
                `si`.`sessionGroupID` = `sg`.`seasionGroupID`
            )
        )
    JOIN `seasionperiod` `sp`
    ON
        (`si`.`seasionID` = `sp`.`seasionID`)
    )

------------------------------------------------------------------------------------

CREATE VIEW VrateType
AS
SELECT DISTINCT ri.*,br.blackoutdateID,br.blackoutDate,br.status as blackoutStatus,
rs.stayperiod_ratetypeID,rs.startDate,rs.endDate,rs.status as stayPeriodStatus
FROM ratetypeinfo ri 
INNER JOIN blackoutdate_ratetype br
ON ri.ratetypeId = br.ratetypeId
INNER JOIN ratetype_wise_stayperiod rs
ON ri.ratetypeId = rs.ratetypeId

-------------------------------------------------------------------------------------------

CREATE VIEW vw_room_type_details as SELECT rti.*, rgd.GuestDetailsID,rgd.Adults,rgd.Children, rgd.ExtraAdults, rgd.ExtraChildren, rbcd.ConfigdetailsID, rbcd.BedDescription, rbcd.Attachable, rfd.FacilitiesDetailsID,rfd.FacilityTypeID, ft.TypeName as FacilitiesTypeName, rfd.Qty as FacilitiesQty, rdd.DistanceDetailsID, rdd.DistanceFrom, rdd.Distance, rvd.ViewDetailsID, rvd.ViewTypeID, rv.TypeName, rsd.SmokeDetailsID, rsd.AllowanceID, sm.SmokingType  from roomtypeinfo as rti 
left join roomguestdetails as rgd on rgd.RoomTypeID = rti.RoomTypeID
left join roombedconfigdetails as rbcd on rbcd.RoomTypeID = rti.RoomTypeID
left join roomfacilitiesdetails as rfd on rfd.RoomTypeID = rti.RoomTypeID
left join facilitytype as ft on ft.FacilityTypeID = rfd.FacilityTypeID
left join roomdistancedetails as rdd on rdd.RoomTypeID = rti.RoomTypeID
left join roomviewdetails as rvd on rvd.RoomTypeID = rti.RoomTypeID
left join roomviewtype as rv on rv.ViewTypeID = rvd.ViewTypeID
left join roomsmokedetails as rsd on rsd.RoomTypeID = rti.RoomTypeID
left join smoking_allowance as sm on sm.SmookingID = rsd.AllowanceID

    ---------------------------------------------------------------------------------------

CREATE view vw_room_number_details as
SELECT rni.*, rnd.DetailsID, rnd.Details, rnd.Attachable, rnd.Status as roomNumberStatus
FROM room_number_info as rni 
JOIN room_number_bed_config_details as rnd on rnd.RoomNumberID = rni.RoomNumberID
-------------------------------------------------------------------------------------------
CREATE VIEW vw_booking
AS
SELECT bm.bookingID,bm.customerID,bm.entryDate,bm.bookBy,bd.bookingDetailsID,bd.fromDate,bd.toDate,bd.price,bd.qty,ci.customerName,ci.email,ci.phone,
ci.country,ci.district,ci.ZIP,ci.additionalInformation,ci.streetAddress,ci.apartment,ci.suite,ci.unit,bd.RoomNumberID,rn.RoomNumberTitle,
rn.Availability,rn.Floor,rn.RoomTypeID,rti.RoomTypeName,rti.TypeOfRoom,rti.RoomDescription,rti.Amenities,bm.paymentmethodID,pi.method paymentmethod
FROM bookingmaster bm 
INNER JOIN bookingdetails bd ON bm.bookingID = bd.bookingID
INNER JOIN customerinfo ci ON bm.customerID = ci.customerID
INNER JOIN room_number_info rn ON bd.RoomNumberID = rn.RoomNumberID 
INNER JOIN roomtypeinfo rti ON rn.RoomTypeID = rti.RoomTypeID
INNER JOIN paymentmethodinfo pi ON bm.paymentmethodID = pi.paymentmethodID
-------------------------------------------------------------------------------------------

Create VIEW vw_itemGuestFolios as SELECT ri.*, rti.RoomTypeName FROM rateinfo ri 
join roomtypeinfo rti on rti.RoomTypeID = ri.RateTypeID

-------------------------------------------------------------------------------------------
CREATE VIEW vw_room_details_calender as SELECT rt.*, rn.RoomNumberID, rn.RoomNumberTitle, rn.Floor FROM 
roomtypeinfo rt JOIN
room_number_info rn on rn.RoomTypeID = rt.RoomTypeID
-------------------------------------------------------------------------------------------

CREATE VIEW vwuserpermission as SELECT
    `m`.`id` AS `id`,
    `m`.`title` AS `title`,
    `m`.`parent_id` AS `parent_id`,
    `p`.`user_id` AS `user_id`,
    `p`.`permit` AS `permit`
FROM
    (
       `menus` `m`
    JOIN `permission` `p`
    ON
        (`m`.`id` = `p`.`menu_id`)
    )

    -------------------------------------------------------------------------------------