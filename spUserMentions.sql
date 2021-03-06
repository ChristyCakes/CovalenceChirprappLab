CREATE DEFINER=`root`@`localhost` PROCEDURE `spUserMentions`(userid int)
BEGIN
	select
			m.chirpid as 'Chirp Id',
			c.text as 'Chirp Text',
			c._created as 'Chirp Date'
	from mentions m 
	join chirps c on c.id = m.chirpid
	where m.userid = userid;
END